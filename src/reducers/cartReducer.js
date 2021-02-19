import Item1 from '../cryptocurrency-logo.jpg';
import Item2 from '../ninjatrader.jpg';
import Item3 from '../thinkorswim.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_Install,PAYMENT_SUCCESS } from '../actions/action-types/cart-actions';


const initState = {
    
    items: [
        {id:1,title:'Cryptocurrency', desc: "Cryptocurrency Trading Algorithm", longdesc:"Cryptocurrency trading algorithm for finding arbitrage opportunities within different exchanges. Works well in volatile environments and only trades on significant price differences. Therefore, it will only place approximately 4 trades a month and needs to be placed on a server and run 24/7", price:110,img:Item1},
        {id:2,title:'Futures', desc: "Futures Trading Algorithm", longdesc:"A pattern recognition algorithm built on the Ninjatrader platform to trade futures. The algorithm looks for significant pricing differences between correlated futures and has a high, but manageable draw-down that can produce consistent returns with an average annual ROI of over 15%.", price:80,img: Item2},
        {id:3,title:'Equities', desc: "Options Trading Algorithm", longdesc:"ThinkScript that can be placed on any TD Ameritrade account. This ThinkScript trades options and looks for pricing differences between the option price and the underlying price. It is meant to be placed on any one stock and has a built-in stop-loss. It is a high-risk, high-reward strategy with an average annual return of over 20%.", price:120,img: Item3}
    ],
    addedItems: [],
    total: 0,
    count: 0

}
//JSON.parse(localStorage.getItem('addedItems'))


const cartReducer= (state = initState,action)=>{
    // var sum = state.addedItems.reduce((count, addedItems) => count + addedItems.quantity, 0);
    // console.log(sum);
    // Clear car after successfull payment
    if(action.type=== PAYMENT_SUCCESS){
        
          return{
            ...state,
            addedItems: [],
            total: 0,
            count: 0
          }
    }

    //INSIDE PRODUCTS COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            //addedItem.quantity += 1 

             return{
                ...state,
                addedItems: [...state.addedItems],
                total: state.total
                //  total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                count: (state.addedItems.reduce((count, addedItems) => count + addedItems.quantity, 0)) + 1
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        if (newTotal < 0){
            return {
                ...state,
                addedItems: [],
                total: 0,
                count: 0
            }
        }else{

            return{
                ...state,
                addedItems: new_items,
                total: newTotal,
                count: (state.addedItems.reduce((count, addedItems) => count + addedItems.quantity, 0)) - 1
        }
        }
    }
    
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              addedItems: [...state.addedItems],
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){//no add to quanity
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            if (newTotal < 0){
                return {
                    addedItems: [],
                    total: 0,
                    count: 0
                }
            }else{
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: [...state.addedItems],
                total: newTotal
            }
        }
        
    }
    if(action.type=== ADD_Install){
        return{
        ...state,
        total: state.total + 200
        }
    }
    if(action.type=== 'SUB_Install'){
        return{
        ...state,
        total: state.total - 200
        }
    }
    
    return state
  }
export default (cartReducer);