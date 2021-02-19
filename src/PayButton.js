import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { paymentSuccess } from './actions/cartActions';


const stripeApiKey = "pk_live_WJeTl4wEk4TtrvdhDkOBVmzx";//"pk_test_tFXD1lUINMsiraTxuqGR6EsQ";
const checkoutUrl = "https://80msfvew1f.execute-api.us-east-1.amazonaws.com/dev/charges";

class PayButton extends React.Component {
  constructor(props) {
    super(props);
      this.onToken = this.onToken.bind(this);
    
  }

  // handleClose = () => {
  //       console.log("App#handleClose");
  //     };
    
  // handleOpen = () => {
  //   console.log("App#handleOpen");
    
  //   // console.log(this.state.title);
  //   };

    // handleToken = (token, addresses) => {
    //     console.log("App#handleToken");
    //     console.log(token);
    //     console.log(addresses);
    //     const { product } = "algo";
    //     //const { product } = this.state.addedItems.map((title) => title);

    //     const body = new FormData();
    //     // Send information to determine how to charge customer:
    //     body.append("product", product);
    //     body.append("quantity", 1);
    
    //     // Send standard Stripe information:
    //     body.append("stripeEmail", token.email);
    //     body.append("stripeToken", token.id);
    //     body.append("stripeTokenType", token.type);
    
    //     body.append("stripeBillingName", addresses.billing_name || "");
    //     body.append(
    //       "stripeBillingAddressLine1",
    //       addresses.billing_address_line1 || ""
    //     );
    //     body.append("stripeBillingAddressZip", addresses.billing_address_zip || "");
    //     body.append(
    //       "stripeBillingAddressState",
    //       addresses.billing_address_state || ""
    //     );
    //     body.append(
    //       "stripeBillingAddressCity",
    //       addresses.billing_address_city || ""
    //     );
    //     body.append(
    //       "stripeBillingAddressCountry",
    //       addresses.billing_address_country || ""
    //     );
    //     body.append(
    //       "stripeBillingAddressCountryCode",
    //       addresses.billing_address_country_code || ""
    //     );
    
    //     body.append("stripeShippingName", addresses.shipping_name || "");
    //     body.append(
    //       "stripeShippingAddressLine1",
    //       addresses.shipping_address_line1 || ""
    //     );
    //     body.append(
    //       "stripeShippingAddressZip",
    //       addresses.shipping_address_zip || ""
    //     );
    //     body.append(
    //       "stripeShippingAddressState",
    //       addresses.shipping_address_state || ""
    //     );
    //     body.append(
    //       "stripeShippingAddressCity",
    //       addresses.shipping_address_city || ""
    //     );
    //     body.append(
    //       "stripeShippingAddressCountry",
    //       addresses.shipping_address_country || ""
    //     );
    //     body.append(
    //       "stripeShippingAddressCountryCode",
    //       addresses.shipping_address_country_code || ""
    //     );
    
    //     fetch(checkoutUrl, {
    //       method: "POST",
    //       body,
    //       mode: "cors"
    //     })
    //       .then(res => {
    //         console.log("response received");
    //         console.dir(res);
    //         return res.json();
    //       })
    //       .then(result => {
    //         console.log("result");
    //         console.log(result);
    //       })
    //       .catch(error => {
    //         console.log("error");
    //         console.error(
    //           error,
    //           "You may need to refresh the server sandbox. It hibernates due to inactivity."
    //         );
    //       });
    //   };

  async onToken(token) { // On a successful tokenization request,
    const res = await fetch(checkoutUrl, { // POST to our backend server with the token and charge details
      method: 'POST',
      body: JSON.stringify({
        token,
        charge: {
          amount: this.props.amount * 100,
          currency: 'USD'
        },
      }),
    });
    const data = await res.json();
    console.log('onToken');
    if(data.message === "Charge processed succesfully!"){
      console.log("Got it");
      this.props.paymentSuccess();
    }
    

  }

  render() {
    return (
      <StripeCheckout
      // allowRememberMe={false}
      // amount={this.props.total * 100}
      // billingAddress
      // closed={this.handleClose}
      // description="algorithm"
      // image="https://stripe.com/img/documentation/checkout/marketplace.png"
      // //image="https://alligator.io/images/alligator-logo3.svg"
      // label="Pay with 💳"
      // locale="auto"
      // name="bradciechanowski.com"
      // opened={this.handleOpen}
      // panelLabel="Rent for {{amount}}"
      // // shippingAddress
      // stripeKey={stripeApiKey}
      // token={this.handleToken}
      // zipCode
        name="Bradciechanowski.com"
        token={this.onToken}
        amount={this.props.amount * 100}
        currency="USD"
        stripeKey={stripeApiKey} // Stripe publishable API Key
        allowRememberMe={true}
      />
    );
  }
}

PayButton.propTypes = {
  amount: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch)=>{
  return{
    paymentSuccess: ()=>{dispatch(paymentSuccess())},
  }
}

const mapStateToProps = (state)=>{
  return{
      items: state.addedItems,
      total: state.total,
      count: state.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PayButton);