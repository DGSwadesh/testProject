// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/dg", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useFindAndModify: false,
//     // useCreateIndex: true
// }).then(() => console.log("connection successfull......")).catch((err) => console.log(err));

// const playlistSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: true
//     },
//     ctype: String,
//     videos: Number,
//     active: Boolean,
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })

// const Playlist = new mongoose.model("Playlist", playlistSchema)

// const creatDocument = async () => {
//     try {
//         const reactPlayList = new Playlist({
//             name: "Node JS",
//             ctype: "backend",
//             videos: 89,
//             active: true
//         });
//         const nodePlaylist = new Playlist({
//             name: "Node JS",
//             ctype: "backend",
//             videos: 89,
//             active: true
//         });

//         const result = await Playlist.insertMany([reactPlayList,nodePlaylist]);
//         console.log(result);
//     } catch (err) {
//         console.log(err);
//     }
// }

// // creatDocument()

// const getDocument = async () => {
//     const result = await Playlist.find({ctype : "backend"}).select({name : 1}).limit(1);
// console.log(result);
// }

// getDocument();