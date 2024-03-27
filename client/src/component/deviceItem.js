import React, {useContext} from 'react'
import '../style/deviceitem.css'
import { jwtDecode } from "jwt-decode";
import { addDevice } from '../http/deviceApi';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const DeviceItem = observer(({devices}) => {

  const {device} = useContext(Context)

  var user = localStorage.getItem('token')

  if(user){
    user = jwtDecode(user)
  }

  const add = (name, price, device_id, user_id, img) => {
    if(device.isAuth === true){
      addDevice(name, price, device_id, user_id, img)
      device.setBasketCount(device.basketCount + 1)
    }
  }

  return (
    <div className='device'>
        <div className='device-img'>
            <img src={'http://localhost:5000/' + devices.img} alt='i1'/>
        </div>
        <div className='device-text'>
            {devices.price}₽ <br/> {devices.name}
        </div>
        {device.isAuth === true &&
          <div onClick={() => add(devices.name, devices.price, devices.id, user.id, devices.img)} className='addToCart'>ADD TO CART</div>
        }
    </div>
  );
})

export default DeviceItem;