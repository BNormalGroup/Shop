import useStyles from "./ReviewBagStyle.ts";
import VisaCard from "../../../assets/cardsImage/visa.png";
import MasterCard from "../../../assets/cardsImage/masterCard.png";
import PayPal from "../../../assets/cardsImage/payPal.png";
import Klarna from "../../../assets/cardsImage/klarna.png";
import { useTranslation } from "react-i18next";

const ReviewBag = () => {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <>
      <div className={`container ${classes.container}`}>
        <div className={classes.wrapper}>
         <div></div>
          <div className={classes.summaryWrapper}>
            <p className={classes.summaryText}>{t('OrderSummary')}</p>
            <hr className={classes.line}/>
            <div className={classes.stackSummaryData}>
              <p className={classes.dataSummaryText}>{t('Subtotal')}</p>
              <p className={classes.dataSummaryText}>123</p>
            </div>
            <div className={classes.stackSummaryData}>
              <p className={classes.dataSummaryText}>{t('Delivery')}</p>
              <p className={classes.dataSummaryText}>{t('FreeShipping')}</p>
            </div>
            <hr className={classes.line}/>
            <div className={classes.stackSummaryData}>
              <p className={classes.totalText}>{t('Total')}</p>
              <p className={classes.totalText}>123</p>
            </div>
            <p className={classes.promoText}>{t('PromoCode')}</p>
            <button className={classes.buttonCheckout}>{t('Checkout')}</button>
            <p className={classes.dataSummaryText}>{t('WeAccept')}</p>
            <div className={classes.cardsStack}>
              <div className={classes.whiteCardWrapper}>
                <img src={VisaCard} className={classes.cardImage}/>
              </div>
              <div className={classes.whiteCardWrapper}>
                <img src={MasterCard} className={classes.cardImage}/>
              </div>
              <div className={classes.whiteCardWrapper}>
                <img src={PayPal} className={classes.cardImage}/>
              </div>
              <div className={classes.pinkCardWrapper}>
                <img src={Klarna} className={classes.cardImage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewBag;
