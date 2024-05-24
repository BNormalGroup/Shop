import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  //right side
  summaryWrapper: {
    backgroundColor: "#D4D2B4",
    padding: "27px 91px 70px 91px",
    display: "flex",
    flexDirection: "column",
    maxWidth: "645px",
    width: "100%",
  },
  summaryText: {
    fontFamily: "Oswald, sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26.68px",
    color: "black",
    margin: 0,
  },
  stackSummaryData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dataSummaryText: {
    fontFamily: "Source Serif 4",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "black",
    margin: 0,
  },
  totalText: {
    fontFamily: '"Source Serif 4", serif',
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "black",
  },
  subtotalMargin: {
    marginBottom: "15px",
  },
  promoText: {
    fontFamily: "Source Serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "#686747",
    marginBottom: "15px",
    marginTop: "35px",
  },
  buttonCheckout: {
    width: "100%",
    height: "50px",
    backgroundColor: "#282826",
    fontFamily: "Oswald, sans-serif",
    fontWeight: "600",
    fontSize: "18px",
    lineHeight: "26.68px",
    color: "#F5F5F5",
    marginBottom: "37px",
  },
  container: {
    marginBottom: 56,
    minHeight: "100vh",
    padding: 0,
  },
  line: {
    color: "black",
    height: "1px",
    opacity: "1",
  },
  whiteCardWrapper: {
    width: "50px",
    height: "30px",
    border: "0.5px solid #282826",
    backgroundColor: "#FFFFFF",
    padding: "0px 2px",
  },
  cardsStack: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    marginTop: "10px",
  },
  pinkCardWrapper: {
    width: "50px",
    height: "30px",
    border: "0.5px solid #282826",
    backgroundColor: "#FFB3C7",
    padding: "0px 2px",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  //left side
  breadcrumbWrapper: {
    marginTop: "10px",
    left: 0,
  },
  leftWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "645px",
  },
  wrapperProducts: {
    maxWidth: "645px",
    width: "100%",
    marginTop: "39px",
    display: "flex",
    flexDirection: "column",
  },
  noItemsContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  noItemsText: {
    fontFamily: "Oswald, sans-serif",
    fontWeight: "600",
    fontSize: "40px",
    lineHeight: "26.68px",
    color: "black",
  },
});
export default useStyles;
