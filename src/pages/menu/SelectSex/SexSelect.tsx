import womanImage from "../../../assets/woman1_menu.png";
import manImage from "../../../assets/man1_menu.png";
import useStyles from "./styles";
const SexSelect = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={womanImage} />
          <button className={classes.button} style={{ right: 15 }}>
            SHOP WOMAN
          </button>
        </div>
        <div className={classes.imageWrapper}>
          <img className={classes.image} src={manImage} />
          <button className={classes.button} style={{ left: 15 }}>
            SHOP MAN
          </button>
        </div>
      </div>
    </>
  );
};

export default SexSelect;
