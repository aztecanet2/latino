import Listing from "../models/listingModel.js";
 
export const getAllListings = async (req, res) => {
    try {
        const Listings = await Listing.findAll();
        res.json(Listings);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getListingById = async (req, res) => {
    try {
        const Listing = await Listing.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(Listing[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createListing = async (req, res) => {
    try {
        await Listing.create(req.body);
        res.json({
            "message": "Listing Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateListing = async (req, res) => {
    try {
        await Listing.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Listing Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteListing = async (req, res) => {
    try {
        await Listing.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Listing Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}