import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  headerWrapper: {
    height: "60px",
    position: "fixed",
    zIndex: "1000",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: '14px 65px',
    borderBottom: "1px solid black",
  },
  lineHeader: {
    color: "black",
    height: "1px",
    opacity: "1",
    width: "100%",
    position: "absolute",
    bottom: "0",
  },
  headerText: {
    fontFamily: "Source Serif",
    fontWeight: "400",
    fontSize: "18px",
    margin: 0,
    textDecoration: 'none',
    lineHeight: "22.55px",
    color: "black",
  },
  leftWrapper: {
    height: '100%',
    padding: '80px 20px 57px 65px',
    maxWidth: '841px',
    width: '100%'
  },
  contentWrapper: {
    paddingTop: "60px",
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    flexWrap: 'wrap'
  },
  //right side
  rightWrapper: {
    height: '100%',
    backgroundColor: '#D4D2B4',
    maxWidth: '599px',
    width: '100%',
    padding: '27px 65px'
  },
  subtotalMargin: {
    marginBottom: "15px",
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
  stackSummaryData: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  line: {
    color: "black",
    height: "1px",
    opacity: "1",
  },
  summaryText: {
    fontFamily: "Oswald, sans-serif",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26.68px",
    color: "black",
    margin: 0,
  },
});
