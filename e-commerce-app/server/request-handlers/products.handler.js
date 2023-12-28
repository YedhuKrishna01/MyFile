import productsModel from "../models/products.model.js";

export async function addProduct(req, res) {
    try {
        let { title, stock, description } = req.body;
        let { thumbnail, images } = req.files;
        thumbnail = thumbnail[0].filename;
        images = images.map(item => item.filename);
        await productsModel.create({
            title,
            thumbnail,
            stock,
            description,
            images
        })
        return res.status(201).json({
            msg: "Data resived!"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error occured!"
        })
    }
}