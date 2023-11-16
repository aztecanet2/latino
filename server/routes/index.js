import express from "express";
 
import { 
    getAllListings,
    createListing,
    getListingById,
    updateListing,
    deleteListing
} from "../controllers/listings.js";
 
const router = express.Router();
 
router.get('/', getAllListings);
router.get('/:id', getListingById);
router.post('/', createListing);
router.patch('/:id', updateListing);
router.delete('/:id', deleteListing);
 
export default router;