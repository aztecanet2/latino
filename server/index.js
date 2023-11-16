import Express  from "express";
import db from "./config/database.js";
import listingRoutes from "./routes/index.js";
import cors from "cors";
 
const app = Express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(Express.json());
app.use('/listings', listingRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));