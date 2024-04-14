import mongoose from "mongoose";

export interface ICategory extends Document {
    _id: string;
    name: string;
}

const CategorySchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
})

export const Category = mongoose.models.Category || mongoose.model('Category', CategorySchema);
