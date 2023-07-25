import React, { useMemo, useReducer, useState } from "react";
import Header from "../../pages/navbar/Navbar";
import NewFooter from "../../pages/NewFooter/Footer";
import "./YourCartPage.css";
import YourCartStages from "./YourCartStages/YourCartStages";
import { useAuth0 } from "@auth0/auth0-react";
import { TestingCartItem } from "./YourCartStages/TestingCart1/TestingCartItem";
import { reducer } from "./YourCartStages/TestingCart1/reducer";

const initialState = {
  items: TestingCartItem,
  totalValue:0,
  totalItem:0,
}

export const multiStepContactContext = React.createContext();

const YourCartPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [currentStep, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (id) => {
    return dispatch({
      type: 'DELETE_ITEM',
      payload: id
    });
  }


  const RemoveItem = (id) => {
    return dispatch({
      type:"REMOVE_ITEM",
      payload:id,
    });
  }

  const increment = (id) => {
    return dispatch({
      type:"INCREMENT",
      payload: id 
    })

  }

  const value = useMemo(() => ({currentStep, setStep, state, RemoveItem, increment,deleteItem}), [currentStep,state])

  return (
    <div>
      {/* <Header /> */}
      <div className="YourCartMainPage">
        {isAuthenticated ? (
          <multiStepContactContext.Provider value={value}>
            <YourCartStages />
          </multiStepContactContext.Provider>
        ) : (
          <div className="container">
          <div className="NotLoggedInCart">
          <div className="NotLoggedInCartHead "><h6>You need to Log in first</h6></div>
          <div className="NotLoggedInCartBody">
            <h1>Please Login, To see your cart !... </h1>
            <div className="Non-Login-Button">
              <button
                className="Login-Cart-Button"
                onClick={() => loginWithRedirect()}
              >
                <span>Log In</span>
              </button>
            </div>
            </div>
          </div>
          </div>
        )}

        {/* <multiStepContactContext.Provider 
      value={{currentStep, setStep}}>
        <YourCartStages/>
      </multiStepContactContext.Provider> */}
      </div>
      {/* <NewFooter /> */}
    </div>
  );
};

export default YourCartPage;
