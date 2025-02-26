import mongoose from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate'

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // cloudinary url
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, //cloudinary url
        required: true,
    },
    views: {
        type: Number,
        default: 0
    },
    isPublised: {
        type: Boolean,
        default: 0
    },
    owner:{
        type: Schema.Types.ObjectId,
        red: 'User'
    }
},{timestamps:true})

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoosee.model("Video", videoSchema)