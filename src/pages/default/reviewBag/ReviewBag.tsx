import useStyles from "./ReviewBagStyle.ts";
import VisaCard from "../../../assets/cardsImage/visa.png";
import MasterCard from "../../../assets/cardsImage/masterCard.png";
import PayPal from "../../../assets/cardsImage/payPal.png";
import Klarna from "../../../assets/cardsImage/klarna.png";
import { useTranslation } from "react-i18next";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { ProductBag } from "../../../components/productBag/ProductBag.tsx";
import { useNavigate } from "react-router-dom";
import { IProductBag } from "../../../utils/types.ts";
import { useEffect, useState } from "react";
import {
  DeleteProductFromBag,
  ShowUserBag,
} from "../../../services/bagService.ts";
import { deleteProduct } from "../../../redux/bagSlice.ts";

const ReviewBag = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const storedProducts = useSelector((state: RootState) => state.bag.products);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [products, setProductsState] = useState<IProductBag[]>([]);
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      if (currentUser.isAuth) {
        const response = await ShowUserBag(currentUser.user.id);
        if (response) setProductsState(response);
      } else {
        setProductsState(storedProducts);
      }
    };

    fetchProducts();
  }, [currentUser.isAuth, storedProducts]);

  useEffect(() => {
    setTotalCost(
      products.reduce((total, product) => {
        return total + product.product.price * product.quantity;
      }, 0),
    );
  }, [products]);

  const deleteProductClicked = async (productDelete: IProductBag) => {
    if (currentUser.isAuth) {
      if (productDelete.id) {
        await DeleteProductFromBag(productDelete.id);
        setProductsState(
          products.filter((product) => product.id !== productDelete.id),
        );
      }
    } else {
      dispatch(deleteProduct(productDelete));
      setProductsState(storedProducts);
    }
  };

  if (products.length > 0)
    return (
      <>
        <div className={`container ${classes.container}`}>
          <div className={classes.wrapper}>
            <div className={classes.leftWrapper}>
              <div className={classes.breadcrumbWrapper}>
                <Breadcrumb
                  titles={[
                    { name: `${t("Home")}`, url: "/" },
                    { name: `${t("ShoppingBag")}`, url: undefined },
                  ]}
                />
              </div>

              <div className={classes.wrapperProducts}>
                {products.map((item, key) => {
                  return (
                    <ProductBag
                      product={item}
                      canEdit={true}
                      key={key}
                      deleteProductClick={deleteProductClicked}
                    />
                  );
                })}
                <hr className={classes.line} />
              </div>
            </div>
            <div className={classes.summaryWrapper}>
              <p className={classes.summaryText}>{t("OrderSummary")}</p>
              <hr className={classes.line} />
              <div className={classes.stackSummaryData}>
                <p
                  className={`${classes.dataSummaryText} ${classes.subtotalMargin}`}
                >
                  {t("Subtotal")}
                </p>
                <p className={classes.dataSummaryText}>${totalCost} USD</p>
              </div>
              <div className={classes.stackSummaryData}>
                <p className={classes.dataSummaryText}>{t("Delivery")}</p>
                <p className={classes.dataSummaryText}>{t("FreeShipping")}</p>
              </div>
              <hr className={classes.line} />
              <div className={classes.stackSummaryData}>
                <p className={classes.totalText}>{t("Total")}</p>
                <p className={classes.totalText}>${totalCost} USD</p>
              </div>
              <p className={classes.promoText}>{t("PromoCode")}</p>
              <button
                className={classes.buttonCheckout}
                onClick={() => {
                  navigate("/order/checkout");
                }}
              >
                {t("Checkout")}
              </button>
              <p className={classes.dataSummaryText}>{t("WeAccept")}</p>
              <div className={classes.cardsStack}>
                <div className={classes.whiteCardWrapper}>
                  <img src={VisaCard} className={classes.cardImage} />
                </div>
                <div className={classes.whiteCardWrapper}>
                  <img src={MasterCard} className={classes.cardImage} />
                </div>
                <div className={classes.whiteCardWrapper}>
                  <img src={PayPal} className={classes.cardImage} />
                </div>
                <div className={classes.pinkCardWrapper}>
                  <img src={Klarna} className={classes.cardImage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className={`container ${classes.container}`}>
          <div className={classes.noItemsContainer}>
            <p className={classes.noItemsText}>{t("EmptyBag")}</p>
          </div>
        </div>
      </>
    );
};

export default ReviewBag;
