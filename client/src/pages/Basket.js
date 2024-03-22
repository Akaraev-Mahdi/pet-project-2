import React, {useEffect, useState, useContext} from 'react'
import { getDevice } from '../http/deviceApi'
import { jwtDecode } from "jwt-decode";
import BasketItem from '../component/basketItem'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/basketItem.css'

const Basket = observer(() => {

  const {device} = useContext(Context)
  var user = localStorage.getItem('token')

  if(user){
    user = jwtDecode(user)
  }

  const [devices, setDevice] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    if(user){
      getDevice(user.id).then((obj) => {setDevice(obj)}).finally(() => setLoading(false))
    }
  }, [])

  if(Loading){
    <div className='shop-text'>
        Loading...
    </div>
  }

  return (
    <div className='B-DEVICES'>
        <h1 className='cart-text'>Корзина</h1>
        {device.isAuth === false && <div>Зарегистрируйтесь чтобы пользоватся корзиной</div>}
        {device.basketCount === 0 && <div>Корзина пуста</div>}
        {devices.map(obj => <BasketItem obj={obj}/>)}
    </div>
  );
})

export default Basket;