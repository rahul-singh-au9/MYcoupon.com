// ALL REQUEST CONTROLLERS
const postItem = require("../models/itemsModel");

// POST REQUEST
const createItem = async (req, res) => {
    const { name, details, qrcode } = req.body;

    const createdItem = new User({ name, details, qrcode });

    try {
        insertedUser = await createdItem.save();

        res.status(201).send(insertedUser);
    }

    catch (err) {
        res.status(409).send(err);
    }
};

// GET REQUESTS
const getItems = async (req, res) => {
    try {
        const Items = await postItem.find();

        res.status(200).json(Items);
    }

    catch (error) {
        res.status(404).send(err);
    }
}


// GET INDIVISUAL REQUEST
const getItem = async (req, res) => {
    try {
        const _id = req.params.id
        const Item = await postItem.findById(_id);

        res.status(200).json(Item);
    }

    catch (err) {
        res.status(404).json(err);
    }
};


// // LIKE POST
// const showQrItem = async (req, res) => {
//     try{

//         const post = await postMessage.findById(_id);

//         // checking if the id exists for the person who is liking
//         const index = post.likes.findIndex((_id) => _id === String(req.userId));

//         if(index === -1){
//             // like the post (if the id does not exists means the person can like the post)
//             post.likes.push(req.userId);

//         } else{
//             // dislike the post
//             post.likes = post.likes.filter((_id) => _id !== String(req.userId));
//         };

//         const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true});

//         res.status(200).json(updatedPost);

//     }catch(err){
//         res.status(404).send(err)
//     }
// }

module.exports = {createItem, getItems, getItem}