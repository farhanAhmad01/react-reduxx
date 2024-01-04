import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

const IceCreamContainer = (props) => {
  console.log(props.numOfIceCream);
  return (
    <div>
      <h1>num of icecream - {props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>buy icecream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.numOfIceCream, // Corrected the property name here
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
