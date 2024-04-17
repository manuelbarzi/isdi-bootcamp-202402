import mongoose from 'mongoose'

const { Schema, model } = mongoose

// const ObjectId = Schema.Types.ObjectId
const { Types: { ObjectId } } = Schema


const user = new Schema({
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    date: {
        type: Date,
        required: true
    }
})

const User = model('User', user)
const Post = model('Post', post)


mongoose.connect('mongodb://localhost:27017/isdigram')
    .then(() => {
        return User.deleteMany()
    })
    .then(() => {
        return Post.deleteMany()
    })
    .then(() => {
        return User.create({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' })
    })
    .then(user1 => {
        let count = 1

        const post1 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

        return Post.create(post1)
            .then(() => {
                count++

                const post2 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

                return Post.create(post2)
            })
            .then(() => {
                count++

                const post3 = { author: user1._id, image: `https://fakeimg.pl/500x400/ff0000?text=Hello+${count}&font=lobster`, text: `hello post ${count}`, date: new Date }

                return Post.create(post3)
            })
    })
    .then(() => {
        return mongoose.disconnect()
    })
    .then(() => console.log('populated'))
    .catch(console.error)
