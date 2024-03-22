const uuid = require('uuid')
const path = require('path');
const {Device, Basket} = require('../models/models')
const ApiError = require('../error/ApiError');

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async addDevice(req, res){
        const {name, price, device, user, img} = req.query
        const basket = await Basket.create({name, price, device_id: device, user_id: user, img})
        return res.json(basket)
    }

    async getDevice(req, res){
        const {id} = req.query
        const basket = await Basket.findAll({where:{user_id: id}})
        return res.json(basket)
    }

    async deleteDevice(req, res){
        const {id} = req.query
        await Basket.destroy({where: {id: id}})
        return res.json({message:'all work'})
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where:{brandId}, limit, offset})
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where:{typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id}
            },
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()