const model = require('../model/create.js');
const app = require('express');
const router = express.Router();


    const createProduct = async (req, res) => {
        try {
            const product = new model(req.body);
            await product.save();
            res.status(201).send(product);
        } catch (error) {
            res.status(400).send(error);
        }
    }

    const getAllProducts = async (req, res) => {
        try {
            const products = await model.find({});
            res.status(200).send(products);
        } catch (error) {
            res.status(500).send({ error: 'Failed to fetch products' });
        }
    }
    const deleteProduct = async (req, res) => {
        try {
            const product = await model.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).send({ error: 'Product not found' });
            }
            res.status(200).send(product);
        } catch (error) {
            res.status(500).send({ error: 'Failed to delete product' });
        }
    }

    const updateProduct = async (req, res) => {
        try {
            const product = await model.findByIdAndUpdate(req.params.id, req.body, {
                new: true, // Return the updated document
                runValidators: true // Validate the update against the schema
            });    

            if (!product) {     
                return res.status(404).send({ error: 'Product not found' });
            }   
            res.status(200).send(product);
        }
        catch (error) {
            res.status(400).send({ error: 'Failed to update product' });
        }   
    }