import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeInput, deleteNumber, numberUser} from "../../Redux/action";
import Number from "../Value"
// import Order from "../Order";

function MainPage(props) {
    const dispatch = useDispatch()
    const {value, numbers} = useSelector(state => state.numberReducer)

    const changeInputNumber = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const userNumber = () => {
        dispatch(numberUser(value))
    }

    const numberDelete = () => {
        dispatch(deleteNumber())
    }

    // const showOrders = (props) => {
    //
    //     props.order.forEach(el => Number.parseFloat(value))
    //     return (<div>
    //         {props.order.map(el => (
    //             <Order onDelete={props.onDelete} key={el.key} item={el}/>
    //         ))}
    //     </div>)
    // }


    return (
        <div>
            <input onChange={changeInputNumber} type="number" value={value}/>
            <button onClick={userNumber}>add</button>
            <button onClick={numberDelete}>clear</button>
            {numbers.map((number, index) => <Number key={index} oneValue={number}/>)}
        </div>
    );
}

export default MainPage;