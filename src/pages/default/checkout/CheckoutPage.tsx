import { useStyles } from "./CheckoutPageStyle.ts";

const CheckoutPage = () => {
  const classes = useStyles();

  return (
    <>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBdPkplL-jxsGIZzcmBwzowxRTkyCLHaho
    &q=Space+Needle,Seattle+WA"
      ></iframe>
    </>
  );
};

export default CheckoutPage;
