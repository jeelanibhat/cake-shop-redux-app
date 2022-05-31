import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCreamActionCreator } from '../redux/iceCream/iceAction'

const IceCreamContainer = () => {

  const numberOfIce = useSelector( state => state.iceCream.numOficeCreams )
  const dispatch = useDispatch()

  return (
    <div>
      <h2>IceCream Container</h2>
      <p>Number of Ice Cream : {numberOfIce} </p>
      <button onClick={()=> dispatch(buyIceCreamActionCreator())}>Ice Creams</button>
    </div>
  )
}

export default IceCreamContainer