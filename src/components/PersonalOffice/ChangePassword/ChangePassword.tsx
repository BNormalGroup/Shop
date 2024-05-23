import useStyles from "./style.tsx";
import React, {startTransition, useState} from "react";
import {IChangePassword} from "../../../utils/types.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store.ts";
import {ChangePasswordService} from "../../../services/authService.ts";

const ChangePassword = () => {
    const classes = useStyles();
    const id = useSelector((state: RootState) => state.users.user.id);
    const [password, setPassword] = useState<IChangePassword>({current_password: '', new_password: ''});
    const [message, setMessage] = useState<string>('');
    async function handleSumbit(event: React.FormEvent) {
        event.preventDefault();
        const responseStatus = await ChangePasswordService(password, localStorage.getItem('authToken') ?? '');
        console.log('reponseStatus: ', responseStatus);
        if (responseStatus.status == 200) {
            setMessage(responseStatus.data.message);
        } else {
            setMessage(responseStatus.data.message);
        }
    }

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const {name, value} = event.target;
        startTransition(() => {
            setPassword((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        });
    };

    return (
        <form action="" onSubmit={handleSumbit} className={classes.container}>
            <h1 className={classes.title}>Change Password</h1>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="firstName">Current Password</label>
                <input onChange={handleChange} className={classes.input} name={'current_password'} value={password.current_password} id="currentPassword" type="password"></input>
            </div>
            <div className={classes.inputContainer}>
                <label className={classes.inputLabel} htmlFor="lastName">New Password</label>
                <input onChange={handleChange} className={classes.input} name={'new_password'} value={password.new_password} id="newPassword" type="password"></input>
            </div>

            <button type={'submit'} className={classes.buttonSave}>Change the password</button>
            <p className={classes.message}>{message}</p>
        </form>

    );
};

export default ChangePassword;
