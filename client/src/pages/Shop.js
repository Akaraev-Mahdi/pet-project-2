import React, {useContext} from "react";
import TypeComp from "../component/TypeComp";
import BrandComp from "../component/BrandComp";
import DeviceComp from "../component/DeviceComp";
import Page from "../component/pageComp";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/deviceitem.css'

const Shop = observer(() => {

    const {device} = useContext(Context)

    const resetAll = () => {
        device.setSelectedBrand(null)
        device.setSelectedType(null)
        device.setActive(true)
    }

    return (
        <div className='container-shop'>
        <div onClick={() => resetAll()} className={`all ${device.active && 'active'}`}>Все товары</div>
            <TypeComp/>
            <BrandComp/>
            <DeviceComp/>
            <Page/>
        </div>
    );
})

export default Shop;