import React from 'react'
import { connect } from 'react-redux'
import {cakeActionCreator} from "../redux/cake/cakeAction"

const CakeContainer = (props) => {
  return (
    <div>
      <h4>With Connect Function without hooks</h4>
      <p>Number of Cakes : {props.numOfCakes} </p>
      <button onClick={props.cakeActionCreator}>Buy Cakes</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    numOfCakes : state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    cakeActionCreator : () => dispatch(cakeActionCreator())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)