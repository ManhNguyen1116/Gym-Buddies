const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = new User({ email, password });
    await user.save();

    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: 'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
    console.log(user._id);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }
});

router.post("/addFriend", async (req, res) => {
  const {email, otherEmail} = req.body;
  try{
    console.log(req.body);
    const user1 = await User.findOne({email});
    const user2 = await User.findOne({email: otherEmail});
    console.log(user1);
    console.log(user2)
    User.requestFriend(user1, user2);
    res.send("worked");
  }
  catch(err){
    return res.status(422).send({error: 'Something went wrong!'});
  }
}); 

router.post("/getFriends", async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({email});
  console.log(user);
  User.getAcceptedFriends(user, {}, {email: 1}, function(err, friendships) {
    console.log(friendships);
    res.send({friendships});
  });
});

router.post("/getRequestedFriends", async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({email});
  console.log(user);
  User.getRequestedFriends(user, {}, {email: 1}, function(err, friendships) {
    console.log(friendships);
  });
});

router.post("/getPendingFriends", async (req, res) => {
  const {email} = req.body;
  const user = await User.findOne({email});
  console.log(user);
  User.getPendingFriends(user, {}, {email: 1}, function(err, friendships) {
    console.log(friendships);
  });
});

module.exports = router;
