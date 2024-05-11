import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    maxWidth: '100px',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: '4px'
  },
  image: {
    width: "91px",
    height: "141px",
    objectFit: "contain",
  },
  name: {
    textDecoration: 'none',
    marginBottom: '21px',
    fontFamily: "Source Serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "19.19px",
    color: "black",
  },
  boxColumn: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  boxName: {
    marginBottom: '21px'
  },
  properties: {
    fontFamily: "Source Serif",
    fontWeight: "300",
    fontSize: "12px",
    lineHeight: "16.45px",
    color: "black",
    margin: '0px'
  },
  price: {
    fontFamily: "Source Serif",
    fontWeight: "400",
    fontSize: "12px",
    margin: '0',
    lineHeight: "16.45px",
    color: "black",
  },
  mainBox: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  photoBox: {
    display: 'flex',
  },
  line: {
    color: "#000000",
    height: "1px",
    opacity: '1'
  },
  select: {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    width: "55px",
    height: "20px",
    fontWeight: "400",
    fontSize: "16px",
    paddingLeft: "6px",
    paddingRight: "8px",
    color: "black",
    fontFamily: "Source Serif",
    lineHeight: "20.05px",
    border: "1px solid #282826",
    backgroundColor: "#F5F5F5",
    borderRadius: "0",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4.5 4.5L8 1' stroke='black'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
    "&:focus": {
      outline: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='9' height='5' viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5L4.5 1L8 4.5' stroke='black'/%3E%3C/svg%3E")`,
    },
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '21px',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  quantityCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '15px',
    border: 0,
    color: 'white',
    height: '15px',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  buttonDelete: {
    backgroundColor: 'transparent',
    border: '0',
  },
  quantityText: {
    color: 'white',
    fontSize: '11px',
    textDecoration: 'none'
  },
  quantityBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px'
  }
});
export default useStyles;