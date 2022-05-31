import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cakeActionCreator } from '../redux/cake/cakeAction';

const HooksCakeContainer = () => {

    const numOfCakes = useSelector( state => state.cake.numOfCakes );
    const dispatch = useDispatch()

  return (
    <div>
        <h4>Hooks Cake Container</h4>
        <p>Number of cakes - {numOfCakes} </p>
        <button onClick={() => dispatch(cakeActionCreator())}>Buy Hook Cakes</button>
        <hr />
    </div>
  )
}

export default HooksCakeContainer