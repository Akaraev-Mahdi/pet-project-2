import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._isAuth = false
        this._basketCount = 0
        this._selectedBrand = null
        this._selectedType = null
        this._page = 1
        this._totalCount = 0
        this._active = false
        makeAutoObservable(this)
    }

    setBasketCount(count){
        this._basketCount = count
    }

    setSelectedBrand(brand) {
        this._active = false
        this._selectedBrand = brand
    }

    setSelectedType(type) {
        this._active = false
        this._selectedType = type
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setActive(bool) {
        this._active = bool
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    get selectedBrand() {
        return this._selectedBrand
    }

    get selectedType() {
        return this._selectedType
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get active() {
        return this._active
    }

    get isAuth() {
        return this._isAuth
    }

    get basketCount() {
        return this._basketCount
    }

}