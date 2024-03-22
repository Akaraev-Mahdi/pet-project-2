import React, { useEffect, useState } from "react";
import TypeItem from "../component/typeItem";
import { fetchTypes } from '../http/deviceApi';
import '../style/typeItem.css'

const TypeComp = () => {

    const [Type, setType] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTypes().then((obj) => {setType(obj)}).finally(() => setLoading(false))
    }, [])

    if(Loading){
        <div className='shop-text'>
            Loading...
        </div>
    }

    return (
        <div className="Types">
            {Type.map((type) => <TypeItem type={type}/>)}
        </div>
    );
}

export default TypeComp;