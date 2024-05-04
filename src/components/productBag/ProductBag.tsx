import { IProductBag } from "../../utils/types.ts";
import useStyles from "./ProductBagStyle.ts";

export const ProductBag = ({product}:{product:IProductBag}) => {
  const classes = useStyles();

  return(
    <>
      <hr className={classes.line}/>
    </>
  )
}
