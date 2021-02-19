import React, { Component } from 'react';
import './App.css';
import shopping from './shoppingcart.png';
import './shoppingcart.png';
import $ from 'jquery';
import './cart.scss';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity } from './actions/cartActions';
import Recipe from './Recipe';
import Badge from '@material-ui/core/Badge';
// import Dropdown from 'react-bootstrap/Dropdown';
//import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


class BradsMenu extends Component {
    componentDidMount(){
        this.updateMobileMenu();
        window.addEventListener("resize", this.updateMobileMenu.bind(this));
        // var sum = 0;
        // if(typeof this.props.items == 'object'){
        //     this.props.items.forEach(funds => {
        //         sum += parseFloat(funds.quantity);
        //         this.setState({ count: sum})
        //         //console.log(this.state.count);
        //     });
        // }
        (function(){
 
            $("#cart").on("click", function() {
              $(".shopping-cart").fadeToggle( "fast");
            });
            
          })();
    }

    // componentWillMount(){
    //     localStorage.getItem('addeditems') && this.setState({ products: JSON.parse(localStorage.getItem('addeditems'))})
    // }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateMobileMenu.bind(this));
        //this.setState({ count: JSON.parse(localStorage.getItem('count'))})
        //localStorage.setItem('count', '0')
      }
    
    constructor(props) {
        super(props);

        this.state = {
            // showForm: false,
            // count: props.count2,
            showMobile: false,
            count: this.props.count,
            showCart: false,
            count3: props.addedItems
            
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    }
    
    updateMobileMenu() {
        if(window.innerWidth < 960) {
          this.setState({ showMobile: true });
        } else {
          this.setState({ showMobile: false });
        }
        console.log(this.state.showMobile);
        console.log($(window).width());
      }
    
    // showForm() {
    //     this.setState({
    //         showForm: !this.state.showForm
    //     });
    // }
    showCart() {
        //console.log(this.props.items[0].quantity);
        // console.log(getStoredState());
        
        this.setState({
            showCart: !this.state.showCart
        });
    }

    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
        if(this.state.count === 1){
            this.setState({ count: 0 })
        };

        // var sum = 0;
        // if(typeof this.props.items == 'object'){
        //     this.props.items.forEach(funds => {
        //         sum += parseFloat(funds.quantity);
        //         this.setState({ count: sum})
        //         //console.log(this.state.count);
        //     });
        // }
        
    }

    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
        var sum = 0;
        if(typeof this.props.items == 'object'){
            this.props.items.forEach(funds => {
                sum += parseFloat(funds.quantity);
                this.setState({ count: sum})
                //console.log(this.state.count);
            });
        }
        // this.setState({ count: this.state.count + 1 });
        //localStorage.setItem('count',JSON.stringify(this.state.count + 1));
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        if(this.state.count === 1){
            this.handleRemove(id);
        }else{
            this.props.subtractQuantity(id);
        }
        var sum = 0;
        if(typeof this.props.items == 'object'){
            this.props.items.forEach(funds => {
                sum += parseFloat(funds.quantity);
                this.setState({ count: sum})
                //console.log(this.state.count);
            });
        }
        // this.setState({ count: this.props.count2 - 1 });
        //localStorage.setItem('count',JSON.stringify(this.state.count - 1));

    }

    RemovingItem = (quantity) => {
        this.setState({ count: this.state.count - quantity });
        //localStorage.setItem('count',JSON.stringify(this.state.count - quantity));
    }
    
    render() {
        
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                            <div className="item-img"> 
                                <img src={item.img} alt={item.img} className=""/>
                            </div>
                        
                            <div className="item-desc">
                                <span className="title">{item.title}</span>
                                <p>{item.desc}</p>
                                <p><b>Price: ${item.price}</b></p> 
                                {/* <p>
                                    <b>Quantity: {item.quantity}</b> 
                                </p> */}
                                {/* <div className="add-remove">
                                    <button><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></button>
                                    <button><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></button>
                                </div> */}
                                <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id); this.RemovingItem(item.quantity)}}>Remove</button>
                            </div>    
                        </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )

        let cart = this.state.showCart ? (
        
                <div className="shopping-cart">
                    <div className="cart">
                        <h5>You have ordered:</h5>
                        <ul className="collection">
                            {addedItems}
                        </ul>
                    </div>
                    <Recipe /> 
                </div>
        ) : '';

        let linksMarkup = this.props.links.map((link, index) => {
            if(window.innerWidth > 960){
                let linkMarkup = link.active ? (
                    <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
                ) : (
                    <a className="menu__link" href={link.link}>{link.label}</a>
                    
                );

                return (
                    <li key={index} className="menu__list-item">
                        {linkMarkup}
                    </li>
                
                )
            }else{
                
                let linkMarkup = link.active ? (
                    <a className="dropa" href={link.link}>{link.label}</a>
                ) : (
                    <a className="dropa" href={link.link}>{link.label}</a>
                    
                );

                return (
                    <li className="dropli" key={index}>
                        {linkMarkup}
                    </li>
                                    
                )
            }
        });

        return (
            <nav className="menu">
                <div id="wrapper">
                    <svg id="signature" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="-20px" y="0px" viewBox="0 0 500 200" xmlSpace="preserve">
                         
                          <path className="line1" d="M118,78 115.08,80.43 110,85 106,90 102,95 97,102 91,111 88,118 86,122 84,129 85,132 87,133"/>
                          <path className="line2" d="M87.35,101.33 85.45,98.39 84.75,94.92 84.75,92.15 86.05,89.38 88.74,86.08 92.9,82.62 97.58,79.67 
                          103.3,77.07 108.49,75.51 114.21,74.13 117.51,73.78 121.66,73.78 126.17,74.3 129.29,75.17 131.71,76.9 132.58,79.32 131.89,81.75 
                          129.98,84 127.04,86.78 123.74,88.68 120.28,90.59 116.12,92.49 111.79,94.23 105.03,95.79 110.05,95.79 113.87,95.79 117.85,96.48 
                          122.18,97.87 125.48,100.12 127.38,102.89 128.08,106.36 127.9,109.3 127.38,111.9 126,115.02 124.09,118.49 121.14,121.95 
                          117.68,125.42 113,129.06 107.97,132.18 103.12,134.6 97.4,136.51 91.51,137.55 86.31,137.38 82.5,136.68 79.04,134.78 77.3,131.66 
                          77.65,127.5 80.08,123.34 83.19,119.7 86.83,117.27 92.03,114.85 96.36,113.81 99.83,113.64 103.99,113.81 106.94,114.5 
                          109.36,115.19"/>
                          <path className="line3" d="M136.57,105.32 139.17,103.24 140.9,101.33 141.94,98.56 139.86,96.83 137.26,97.52 136.22,99.95 
                          136.39,102.2 139.17,105.32 140.03,106.7 139.86,108.44 139.17,111.04 137.78,113.46 136.05,116.23 135.18,118.49 136.05,119.87 
                          138.13,117.97 140.9,116.06 144.36,113.29 147.66,110.52 150.34,108.22 152.81,106.01 155.54,104.06 156.68,103.72 158.14,103.28 
                          160.09,103.8 161.52,104.84 159.14,103.15 156.19,103.58 154.07,104.62 152.73,105.58 151.47,106.7 149.09,109.78 148.44,111.34 
                          148.31,112.55 148.52,113.98 149.69,114.5 151.21,114.07 152.9,113.29 154.33,112.42 155.71,111.43 157.4,110.21 158.79,108.83 
                          160.26,107.48 161.17,106.31 162.13,104.93 162.56,104.88 162.26,105.62 161.39,106.7 160.26,108.26 159.53,109.22 158.53,110.73 
                          157.88,112.12 157.58,113.29 157.49,114.37 157.84,114.89 158.49,115.11 159.48,114.81 160.83,114.16 162.73,113.07 164.42,112.12 
                          166.2,111.08 167.54,110.26 169.14,109.17 170.66,108.13 172.22,106.96 173.61,105.79 174.91,104.62 176.29,103.32 177.59,102.11 
                          178.59,101.16 179.93,100.73 181.66,100.64 182.92,101.55 183.35,102.76 183.57,104.32 184,103.37 183.48,101.94 182.31,100.6 
                          180.67,100.16 179.41,100.51 177.9,101.38 176.81,102.24 175.64,103.45 174.17,105.01 173.39,106.75 172.74,108.22 172.57,109.87 
                          173,110.99 174,111.86 176.08,111.25 178.03,109.95 180.1,108.74 181.45,107.79 189.81,101.2 196.18,95.31 203.5,87.86 
                          205.92,84.52 206.66,82.88 206.7,81.58 205.84,81.23 204.75,81.75 203.15,82.44 201.16,84 198.86,85.91 195.57,89.46 193.4,91.93 
                          191.02,95.05 188.73,98.13 186.82,101.03 185.61,103.11 181.97,108.96 180.71,111.3 179.84,113.46 179.32,115.28 179.45,116.54 
                          180.1,117.19 181.27,117.14 183.27,116.45 186.47,114.68 190.37,112.21 193.1,110.08 195.92,107.96 198.43,105.79 201.03,103.45 "/>
                        <path className="line4" d="M231.87,71.01 230.66,73.39 229.58,75.04 228.93,77.2 228.88,79.24 229.49,81.1 230.7,82.7 
                          232.78,84.09 235.21,85.17 239.41,86.34 243.83,86.86 247.69,87.12 252.49,87.08 255.57,86.78 259.69,86.13 262.68,85.09 
                          265.1,83.48 267.31,81.45 268.61,79.11 268.91,76.81 267.96,75.04 266.23,74.04 263.19,73.61 260.12,73.95 256.61,74.86 
                          252.28,76.51 247.95,78.46 244.57,80.49 241.06,83.14 238.63,85.13 233.82,89.46 230.49,93.27 227.32,97.13 223.38,102.98 
                          220.39,108.18 218.18,113.03 216.54,117.66 215.54,120.91 214.76,124.47 214.63,127.15 214.72,129.79 215.54,132.52 216.36,134.17 
                          217.53,135.64 219.44,136.77 221.91,137.29 224.34,137.33 227.24,136.94 229.53,136.25 233.17,134.73 236.21,133 240.19,130.1 
                          244.52,126.76 250.07,121.87 254.01,117.92 259.17,112.81 260.81,110.99 262.72,108.78 265.01,106.01 266.4,104.45 263.89,107.96 
                          262.5,110.21 261.16,112.47 260.55,114.07 260.47,115.19 261.12,115.76 262.03,115.71 264.36,114.81 267.27,113.2 271.04,110.73 
                          273.2,109.26 274.24,109.17 275.45,109.39 277.23,109.3 279.48,108.61 281.48,107.4 283.08,106.23 284.16,104.45 284.47,102.63 
                          283.08,102.37 281.13,103.15 278.7,104.67 277.1,106.18 275.24,108 274.16,110.47 274.03,110.82 273.77,111.99 273.64,113.55 
                          274.24,115.06 275.54,115.97 277.92,115.89 280.26,115.15 283.99,113.33 286.81,111.6 288.54,110.47 290.75,109.09 292.65,107.57 
                          294.39,106.31 296.42,104.49 298.5,102.68 300.49,102.07 301.79,102.11 302.57,102.98 302.66,103.67 302.14,103.02 301.36,102.46 
                          299.93,101.77 298.85,102.24 297.07,103.54 295.38,105.01 295.04,106.1 293.78,107.74 292.91,109.3 292.26,111.73 293.13,113.46 
                          294.39,113.59 296.68,113.38 299.11,112.42 302.49,110.69 305.48,108.83 308.12,107.01 315.66,101.46 325.06,93.58 330.21,88.55 
                          332.6,85.65 333.77,83.57 334.07,82.18 333.51,81.4 332.29,81.36 330.65,82.05 328.48,83.48 325.92,85.65 323.15,88.68 319.9,92.32 
                          316.87,96.31 313.84,100.68 312.41,102.85 309.25,108 307.43,111.38 306.52,113.64 306.26,115.41 306.26,116.67 309.33,113.33 
                          311.97,110.6 314.92,107.61 317.52,105.58 320.21,104.15 321.33,104.62 321.38,105.97 320.81,107.92 319.9,109.95 318.47,112.99 
                          316.91,115.67 315.4,118.23 313.49,121.17 312.02,123.69 311.41,125.59 311.54,126.59 312.8,126.33 314.83,124.86 317,123.08 
                          318.95,121.26 321.55,119.05 324.28,116.32 326.57,114.16 328.48,112.16 330.6,109.91 332.68,107.14 334.85,105.27 336.8,103.97 
                          338.92,103.45 340.96,103.5 342,104.1 342.82,104.67 341.39,103.37 339.74,103.19 337.92,103.5 335.41,104.58 333.46,106.18 
                          332.42,108.26 331.43,109.39 329.91,111.12 329.52,112.25 329.65,113.25 330.21,114.16 330.99,114.46 332.12,114.29 333.72,113.64 
                          335.58,112.6 337.62,111.17 339.74,109.56 341.35,107.92 342.73,106.4 343.86,104.84 340.26,109.82 339.31,112.51 338.92,113.38 
                          338.96,114.33 339.53,115.11 340.61,114.94 342.52,114.11 346.2,112.16 350.75,109.04 354.39,106.4 356.08,104.88 357.38,103.93 
                          358.72,102.94 359.37,101.9 359.5,101.07 358.89,101.03 358.29,101.46 357.72,102.16 353.04,110.08 351.96,112.86 351.7,113.72 
                          355.04,110.6 357.77,108.05 360.19,105.84 362.62,103.97 363.74,103.28 364.48,103.54 364.74,104.06 364.48,105.14 363.83,107.22 
                          363.09,109.26 362.96,110.47 363.09,111.3 363.79,111.56 364.87,111.12 367.04,110.04 369.64,108.57 372.45,106.79 374.92,105.01 
                          377.13,103.37 379.47,102.29 380.94,102.37 381.9,103.02 382.33,104.15 382.5,105.1 382.68,105.62 382.76,104.58 382.42,103.37 
                          381.38,102.24 380.25,102.11 377.95,102.68 373.53,106.53 372.75,108.44 372.15,110 371.84,111.21 371.84,112.03 372.36,112.73 
                          373.1,113.33 374.18,113.51 375.74,113.2 377.39,112.42 378.95,110.99 380.38,109.22 381.03,107.57 380.99,106.49 380.12,105.92 
                          379.3,106.4 378.73,106.92 378.86,107.79 379.47,108.26 381.25,108.91 382.42,109.09 384.49,108.78 386.23,108.26 388.35,107.4 
                          390.13,106.36 391.64,104.88 393.2,103.37 394.63,101.85 395.41,100.81 395.76,99.9 395.71,99.12 395.11,99.38 394.33,100.34 
                          393.64,101.29 393.16,102.11 389.26,108.78 387.74,112.47 387.09,114.03 386.49,116.1 386.27,118.05 386.62,118.62 387.27,118.83 
                          388.09,118.44 389.3,117.66 391.08,116.49 393.81,114.24 395.84,112.12 397.49,110.26 399.14,108.05 400.7,106.1 401.74,104.54 
                          402,103.28 401.35,102.68 400.57,103.45 399.48,104.88 399.09,106.18 398.14,110.86 397.97,112.55 398.1,113.9 398.31,115.06 
                          398.96,115.41 399.96,115.02 401.3,114.11 402.82,112.73 404.38,110.95 405.72,109.26 407.32,106.96 408.49,105.19 409.1,103.89 
                          408.62,105.92 408.71,106.83 409.32,107.22 410.4,107.35 411.96,107.01 413.69,106.36 415.51,105.27 417.72,103.63 420.15,101.77 
                          421.1,100.77 421.19,99.77 420.84,98.82 420.06,98.34 418.94,98.6 417.94,99.3 417.25,100.42 416.81,101.72 416.6,102.81 
                          416.73,105.14 417.03,106.75 417.46,108.18 418.42,110.47 419.19,112.64 419.41,114.59 419.32,115.93 418.72,117.53 417.81,119.18 
                          416.68,120.74 414.73,122.3 411.79,123.64 409.58,124.16 407.58,124.25 405.94,123.9 404.94,122.73 405.03,121.35 405.68,119.96 
                          407.84,118.1 411.66,115.24 416.51,112.25 421.14,109.43 426.34,106.49 429.64,104.28 432.88,101.85 435.09,99.95 440.86,95.27 
                          447.35,89.2 450.43,85.61 451.77,83.57 452.12,82.1 451.69,81.01 450.26,81.14 448.39,82.05 445.75,84 443.45,86.08 440.64,89.03 
                          437.91,92.19 434.14,97 432.02,100.25 430.33,102.94 426.78,108.44 425.04,112.73 424.52,114.81 424.31,116.84 426.52,113.51 
                          428.16,111.25 429.16,110.26 430.16,109.78 431.28,109.65 432.93,109.35 434.83,108.52 436.52,107.74 437.91,106.57 438.39,105.49 
                          438.17,104.36 436.83,104.28 434.88,105.06 432.1,107.09 430.81,108.57 429.64,110.39 429.16,111.77 428.9,113.85 429.12,115.71 
                          429.51,117.32 430.29,118.18 431.5,118.83 433.27,119.01 435.31,118.7 437.78,117.71 440.42,116.06 445.1,112.68 449.17,109.09 
                          451.12,107.22 452.34,105.79 453.46,104.23 450.43,108.35 448.35,111.99 447.53,113.72 447.31,115.11 447.7,115.84 448.74,115.89 
                          450.21,115.32 454.07,113.29 457.49,110.86 462.56,107.31 465.51,105.01 466.46,104.06 "/>
                        </svg>
                </div>

                <div className="menu__right">
                    {this.state.showMobile ? (
                        <div  className="dropdown">
                            <div className="buttondrop" onClick={this.showDropdownMenu}><i className="fa fa-bars"></i></div>
                
                                { this.state.displayMenu ? (
                                    <ul className="dropul">
                                        {linksMarkup}
                                    </ul>
                                ):
                                (
                                    null
                                )
                                }
               
                        </div>
               
                        ):(
                            <ul className="menu__list">
                                {linksMarkup}
                            </ul>
                        )
                    }
                    {/* {responsiveMoblie} */}

                    {/* <button onClick={this.showForm.bind(this)} style={{
                    backgroundImage: 'url(' + searchIcon + ')'
                    }} className="menu__search-button"></button>
                    
                    {searchForm} */}
                    
                    <button onClick={this.showCart.bind(this)} style={{
                    backgroundImage: 'url(' + shopping + ')'
                    }} className="menu__search-button" id="cart"> 
                        <div className="iconcart">
                            <Badge className="Badge" color="secondary" badgeContent={this.props.count}>
                                {/* <ShoppingCartOutlinedIcon fontSize='small'/> */}
                                
                            </Badge>
                        </div>
                    </button>
                    
                    
                    
                    
                </div>
                {cart}
            </nav>
            
        );
    }
}
//<span className="badge">{additems1}</span>
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        total: state.total,
        count: state.count
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BradsMenu);
