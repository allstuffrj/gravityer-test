import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || "";

if (!mongoUri) {
    throw new Error("MongoDB URI not found in environment variables.");
}

async function calculateMonthlySales() {
    const client = new MongoClient(mongoUri);
    
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);  // Use DB_NAME from the .env file
        const salesCollection = db.collection("sales");

        const pipeline = [
            {
                $unwind: "$items"
            },
            {
                $group: {
                    _id: {
                        store: "$store",
                        month: { $substr: ["$date", 0, 7] }
                    },
                    totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
                    totalQuantity: { $sum: "$items.quantity" }
                }
            },
            {
                $addFields: {
                    averagePrice: { $divide: ["$totalRevenue", "$totalQuantity"] }
                }
            },
            {
                $sort: {
                    "_id.store": 1,
                    "_id.month": 1
                }
            },
            {
                $project: {
                    store: "$_id.store",
                    month: "$_id.month",
                    totalRevenue: 1,
                    averagePrice: 1
                }
            }
        ];

        const result = await salesCollection.aggregate(pipeline).toArray();
        console.log(JSON.stringify(result, null, 2));

    } finally {
        await client.close();
    }
}

calculateMonthlySales().catch(console.error);
