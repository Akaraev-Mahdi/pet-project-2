import {$host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchBrand = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const fetchDevice = async (typeId, brandId, page, limit = 5) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}

export const addDevice = async (name, price, device_id, user_id, img) => {
    const {data} = await $host.post(`api/basket?name=${name}&price=${price}&device=${device_id}&user=${user_id}&img=${img}`)
    return data
}

export const getDevice = async (id) => {
    const {data} = await $host.get(`api/basket?id=${id}`)
    return data
}

export const deleteDevice = async (id) => {
    const {data} = await $host.delete(`api/basket?id=${id}`)
    return data
}