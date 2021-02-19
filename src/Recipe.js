import React, { Component } from 'react'
import { connect } from 'react-redux';
import PayButton from './PayButton';
// import StripeCheckout from 'react-stripe-checkout';
import 'axios';
//import { addInstall } from './actions/cartActions'

// const stripeApiKey = "pk_test_tFXD1lUINMsiraTxuqGR6EsQ";
// const checkoutUrl = "https://pswgne4fdl.execute-api.us-east-1.amazonaws.com/tryinfg";

class Recipe extends Component{

    componentWillUnmount() {
            if(this.refs.Install.checked){
                this.props.substractInstall()
            }
    }

    constructor(props) {
        super(props);

        this.state = {
            title: props.addedItems.map(items => items.title)
        };
    }

    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addInstall();
        }
        else{
            this.props.substractInstall();
        }
    }

    // handleClose = () => {
    //     console.log("App#handleClose");
    //   };
    
    // handleOpen = () => {
    // console.log("App#handleOpen");
    
    // console.log(this.state.title);
    // };

    // handleToken = (token, addresses) => {
    //     console.log("App#handleToken");
    //     console.log(token);
    //     console.log(addresses);
    //     const { product } = this.state.title;
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

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="Install" onChange= {this.handleChecked} />
                                <span>Professional Install (+$200)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: ${this.props.total}</b></li>
                    </div>
                    <div className="checkout">
                        <PayButton amount={this.props.total}/>
                        {/* <StripeCheckout
                        allowRememberMe={false}
                        amount={this.props.total * 100}
                        billingAddress
                        closed={this.handleClose}
                        description="algorithm"
                        image="https://stripe.com/img/documentation/checkout/marketplace.png"
                        //image="https://alligator.io/images/alligator-logo3.svg"
                        label="Pay with 💳"
                        locale="auto"
                        name="bradciechanowski.com"
                        opened={this.handleOpen}
                        panelLabel="Rent for {{amount}}"
                        // shippingAddress
                        stripeKey={stripeApiKey}
                        token={this.handleToken}
                        zipCode
                        /> */}
                        {/* <button className="waves-effect waves-light btn">Checkout</button> */}
                    </div>
                 </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addInstall: ()=>{dispatch({type: 'ADD_Install'})},
        substractInstall: ()=>{dispatch({type: 'SUB_Install'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)