import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  summaryWrapper: {
    backgroundColor: '#D4D2B4',
    padding: '27px 91px 70px 91px',
    display: 'flex',
    flexDirection: 'column',
  },
  summaryText: {
    fontFamily: "Oswald, sans-serif",
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '26.68px',
    color: 'black'
  }
});
export default useStyles;
