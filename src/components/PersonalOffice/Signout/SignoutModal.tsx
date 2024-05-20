import useStyles from "./style.tsx";
import React from "react";
import {GetUserOrdersService} from "../../../services/ordersService.ts";
import {logout} from "../../../redux/userSlice.ts";
import {useNavigate} from "react-router-dom";

const SignoutModal = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const signout = async () => {
        logout();
        navigate('/');
    };

    return (
        <div className="modal fade" id="signoutModal" tabIndex={-1} aria-labelledby="signoutModalLable" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className={classes.bodyContainer}>
                        Ви справді хочете вийти з аккаунту?
                    </div>
                    <div className={classes.modalButtonContainer}>
                        <button className={classes.modalButton} type="button"  data-bs-dismiss="modal">Ні</button>
                        <button className={classes.modalButton} onClick={signout} data-bs-dismiss="modal" type="button" >Так</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignoutModal;
