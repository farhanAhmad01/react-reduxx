import React from 'react'
import { increment,decrement } from '../redux/cake/CakeAction'
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


const Counter = () => {
    const count = useSelector(state =>state.count)
    const dispatch = useDispatch()
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={ ()=> dispatch(decrement())}>-</button>
    </div>
  )
}



export default Counter