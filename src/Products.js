
import React, { Component } from 'react';
import BradsMenu from './BradsMenu';
import logo from './signature.svg';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';
import './cart.scss';

// function quant(props) {
//     let thecount = props.quanttotal + 1;
//     return thecount;
//   }

class Products extends Component{
    
    state = {
        // showForm: false,
        count: 0
    };
    handleClick = (id)=>{
        this.props.addToCart(id);
        }
    IncrementItem = () => {
        this.setState({ count: this.state.count + 1 });
        localStorage.setItem('count',JSON.stringify(this.state.count + 1));
    }

    

    render(){
        let links = [
            { label: 'Home', link: 'Home' },
            { label: 'Resume', link: 'Resume' },
            { label: 'Products', link: 'Products', active: true  },
            { label: 'Contact', link: 'Contact'},
          ];
      
          const Aux = (props) => {
            return props.children;
          };
          
          let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span className="card-title">{item.title}</span>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light" onClick={()=>{this.handleClick(item.id); this.IncrementItem()}}> <i className="material-icons">add</i></span>
                        </div>

                        <div className="card-content">
                            <p>{item.longdesc}</p>
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                        
                 </div>
            )
        })

        return(
            <Aux>
                <div className="container container2 center">
                    <BradsMenu links={links} logo={logo} count2={this.state.count}/>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"/>
                
                    <div className="productcontainer">
                        
                            <h3 className="productdiv ProductTitle">Our Products</h3>
                            <p className="producta">Algorithms created from different software development projects</p>
                        
                        <div className="box">
                            {itemList}
                        </div>
                    </div>
                
            </Aux>
        )
    }
        
}  

const mapStateToProps = (state)=>{
    return {
        items: state.items
         }
    }

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
            }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Products)