import React, { useContext } from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import '../style/typeItem.css'

const TypeItem = observer(({type}) => {

  const {device} = useContext(Context)

  return (
        <div onClick={() => device.setSelectedType(type.id)} className={`type ${type.id === device.selectedType ? 'active' : ''}`}>
            {type.name}
        </div>
  );
})

export default TypeItem;