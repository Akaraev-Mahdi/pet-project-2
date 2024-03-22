import React, { useEffect, useState } from "react";
import BrandItem from "../component/brandItem";
import { fetchBrand } from '../http/deviceApi';
import '../style/brandItem.css'

const BrandComp = () => {

    const [Brand, setBrand] = useState([])
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        fetchBrand().then((obj) => {setBrand(obj)}).finally(() => setLoading(false))
    }, [])

    if(Loading){
        <div className='shop-text'>
            Loading...
        </div>
    }

    return (
        <div className="Brands">
            {Brand.map((brand) => <BrandItem brand={brand}/>)}
        </div>
    );
}

export default BrandComp;