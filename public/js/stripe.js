/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51N5EIJDZDT2BDdCfdCC5LhqqE3unnfiFHgjOyE6cZpVvgBaYC6o5ieoqIn2UMehtXmzPFoXxxikHdFoLgoBv9INd00eL64rSuq'
);

export const bookTour = async tourId => {
  try {
    // 1) get checkout session from the server API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);

    // 2) create checkout form + charge credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    // console.log(err);
    showAlert('error', err);
  }
};
