const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

const userSeed = [
    {
        username: 'lernantino',
        email: 'lernantino@gmail.com',
        friends: [],
        thoughts: []
    },
    {
        username: 'john_doe',
        email: 'john.doe@example.com',
        friends: [],
        thoughts: []
    },
];

const thoughtSeed = [
    {
        thoughtText: "This is Lernantino's thought",
        username: 'lernantino'
    },
    {
        thoughtText: "This is John's thought",
        username: 'john_doe'
    },
];

db.once('open', async () => {
    try {
        await User.deleteMany({});
        console.log('Users cleared');
        
        await Thought.deleteMany({});
        console.log('Thoughts cleared');
        
        await User.insertMany(userSeed);
        console.log('Users seeded!');
        
        await Thought.insertMany(thoughtSeed);
        console.log('Thoughts seeded!');
        
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
