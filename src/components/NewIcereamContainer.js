import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCreamActionCreator } from '../redux/iceCream/iceAction';

const NewIcereamContainer = () => {
    const [number, setNumber] = useState(1);
    const numOfNewIcecream = useSelector(state => state.iceCream.numOficeCreams)
    const dispatch = useDispatch()

    return (
    <div>
        <h2>New Iceream Container</h2>
        <p>New Icream : {numOfNewIcecream}  </p>
        <input type="text" value={number} onChange={ (e)=> setNumber(e.target.value) } />
        <button onClick={() => dispatch(buyIceCreamActionCreator(number))}>Buy {number} New IceCream</button>
    </div>
  )
}

export default NewIcereamContainer