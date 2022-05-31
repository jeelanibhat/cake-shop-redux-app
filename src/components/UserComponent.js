import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../redux/users/UserAction'

const UserComponent = () => {

    useEffect( () =>{
        dispatch(fetchData())
    }, [] )

    const userSelector = useSelector( state => state.user )
    const dispatch = useDispatch();


  return (

    <div>
        <h2>User Data</h2>
        <div>
            {userSelector.users.map( (item)=> <p key={item.id}>{item.name}</p> )}
        </div>
    </div>
  )
}

export default UserComponent