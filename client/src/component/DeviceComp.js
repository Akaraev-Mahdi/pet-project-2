import React, { useEffect, useState, useContext } from 'react'
import { fetchDevice } from '../http/deviceApi'
import DeviceItem from './deviceItem'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/deviceitem.css'

const DeviceComp = observer(() => {

    const {device} = useContext(Context)

    const [devices, setDevice] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        fetchDevice(device.selectedType, device.selectedBrand, device.page, 2).then((obj) => {setDevice(obj.rows); device.setTotalCount(obj.count)}).finally(() => setLoading(false))
    }, [device.selectedBrand, device.selectedType, device.page])

    if(Loading){
        <div className='shop-text'>
            Loading...
        </div>
    }

  return (
    <div className='Devices'>
        {devices.map((device) => <DeviceItem devices={device}/>)}
    </div>
  );
})

export default DeviceComp;