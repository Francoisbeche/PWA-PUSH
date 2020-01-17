import mongoose from 'mongoose';


const PushTokenSchema = mongoose.Schema({

    endpoint: String,
    keys: mongoose.Schema.Types.Mixed,
    createDate: {
        type: Date,
        default: Date.now
    }

});

export default PushTokenSchema;
