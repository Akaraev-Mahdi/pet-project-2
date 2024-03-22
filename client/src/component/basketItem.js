import React from 'react'
import '../style/basketItem.css'
import { deleteDevice } from '../http/deviceApi'

const BasketItem = ({obj}) => {

    const delDevice = (id) => {
        deleteDevice(id)
        window.location.reload()
    }

  return (
        <div className='b-device'>
            <div onClick={() => delDevice(obj.id)} className='X'>X</div>
            <div className='b-device-img'>
                <img src={'http://localhost:5000/' + obj.img} alt='i1'/>
            </div>
            <div className='b-device-text'>
                {obj.price}₽ <br/> {obj.name}
            </div>
        </div>
  );
}

export default BasketItem;