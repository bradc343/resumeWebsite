import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './Contact';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Products from './Products';
import Resume from './Resume';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers/cartReducer';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = createStore(persistedReducer)
let persistor = persistStore(store)


// const store = createStore(cartReducer);
window.React = React;

ReactDOM.render(
  
  <Provider store={store}>
    <PersistGate loading={<p>loading</p>} persistor={persistor}>
    <BrowserRouter> 
    <Switch>
      {/* Notice there is a NavComponent surrounding the part Components*/}
      <Route >
      <Route exact path ="/" component={App}/>
      <Route exact path ="/Contact" component={Contact}/>
      <Route exact path ="/Home" component={App}/>
      <Route exact path ="/Products" component={Products}/>
      <Route exact path ="/Resume" component={Resume}/>    
      </Route>
      </Switch>
    </BrowserRouter>
    </PersistGate>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
