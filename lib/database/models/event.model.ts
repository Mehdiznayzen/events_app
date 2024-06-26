import mongoose, { Document } from "mongoose";

export interface InterfaceEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url?: string;
    category: { 
        _id: string, 
        name: string 
    }
    organizer: { 
        _id: string, 
        firstName: string, 
        lastName: string 
    }
}

const EventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    },
    location: { 
        type: String 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    startDateTime: { 
        type: Date, 
        default: Date.now 
    },
    endDateTime: { 
        type: Date, 
        default: Date.now 
    },
    price: { 
        type: String 
    },
    isFree: { 
        type: Boolean, 
        default: false 
    },
    url: { 
        type: String
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' 
    },
    organizer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
})

export const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);