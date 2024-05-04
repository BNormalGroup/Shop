import { createUseStyles } from "react-jss";

export const ProductAdditionalInfo = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <p className={classes.headerTextSelected}>Fit</p>
        <p className={classes.headerText}>Fabric</p>
        <p className={classes.headerText}>Delivery & Payment</p>
      </div>
      <div className={classes.content}>
        Relaxed fit Organic cotton is grown from non-genetically modified seeds
        without chemical fertilisers or pesticides
      </div>
    </>
  );
};

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    height: "26px",
    display: "flex",
    width: "423px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
    borderBottom: "1px solid black",
  },
  headerText: {
    fontFamily: "Source Serif 4, serif",
    color: "#686747",
    fontWeight: "300",
    fontSize: "16px",
    padding: "0",
    margin: "0",
    cursor: "pointer",
    lineHeight: "20.05px",
  },
  headerTextSelected: {
    fontFamily: "Source Serif 4, serif",
    color: "black",
    fontWeight: "600",
    padding: "0",
    margin: "0",
    cursor: "pointer",
    fontSize: "16px",
    lineHeight: "20.05px",
  },
  content: {
    height: "100%",
    width: "423px",
  },
});
