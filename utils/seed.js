const mongoose = require('mongoose');
const db = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');

const userSeed = [
    {
        username: 'lernantino',
        email: 'lernantino@gmail.com',
    },
    {
        username: 'john_doe',
        email: 'john.doe@example.com',
    },
];

const thoughtSeed = [
    {
        thoughtText: "This is Lernantino's thought",
        username: 'lernantino',
        reactions: [
            {
                reactionBody: "John's reaction to Lernantino's thought",
                username: 'john_doe'
            }
        ]
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

        const users = await User.insertMany(userSeed);
        console.log('Users seeded!');

        const thoughts = await Thought.insertMany(thoughtSeed);
        console.log('Thoughts seeded!');

        // Linking thoughts to the respective users
        await User.updateOne({ username: 'lernantino' }, { $push: { thoughts: thoughts[0]._id } });
        await User.updateOne({ username: 'john_doe' }, { $push: { thoughts: thoughts[1]._id } });
        console.log('Thoughts linked to users!');

        // Making users friends with each other
        await User.updateOne({ username: 'lernantino' }, { $push: { friends: users[1]._id } });
        await User.updateOne({ username: 'john_doe' }, { $push: { friends: users[0]._id } });
        console.log('Friends added!');

        process.exit(0);
    } catch (err) {
        throw err;
    }
});

