const express = require('express');
const router = express.Router();
const friends = require("./../data/friends")


router.get("/friends", function (req, res) {
    //Get and display all friends as json
    res.json(friends);
});

router.post("/friends", function (req, res) {
    //Take data from the req.body. Its already structured like our friends objects
    var data = req.body;
    //Store the differences
    var diffArray = [];

    friends.forEach(friend => {
        var totalDifference = 0;
        var scoreIndex = 0;
        friend.scores.forEach(element => {
            totalDifference += Math.abs(data.scores[scoreIndex] - element);
            scoreIndex++;
        });
        diffArray.push(totalDifference);
    });
    //Find the lowest difference out of the diffArray. Store that index to be used to link
    //back to our friends data.
    var index = diffArray.indexOf(Math.min.apply(null, diffArray));

    //Make a new entry in friends
    friends.push(data);

    //Send best match to client
    res.json(friends[index]);
});

module.exports = router;