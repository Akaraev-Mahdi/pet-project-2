import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/brandItem.css'

const BrandItem = observer(({brand}) => {

  const {device} = useContext(Context)

  return (
        <div onClick={() => device.setSelectedBrand(brand.id)} className={`brand ${brand.id === device.selectedBrand ? 'active' : ''}`}>
            {brand.name}
        </div>
  );
})

export default BrandItem;