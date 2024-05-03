import useStyles from "./ReviewBagStyle.ts";

const ReviewBag = () =>{
  const classes = useStyles();

  return(
    <>
      <div className={classes.wrapper}><p className={classes.summaryText}>ddd</p> </div></>
  )
}

export default ReviewBag;
