import { MongoClient, ObjectId } from 'mongodb'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

const { CredentialsError, NotFoundError } = errors

describe('logic', () => {
    let client, users, posts

    before(done => {
        client = new MongoClient('mongodb://localhost:27017')

        client.connect()
            .then(connection => {
                const db = connection.db('test')

                users = db.collection('users')
                posts = db.collection('posts')

                logic.users = users

                done()
            })
            .catch(done)
    })

    // describe('retrievePosts', () => {
    //     it('retrieves all posts for existing user', done => {
    //         db.users.deleteAll(error => {
    //             if (error) {
    //                 done(error)

    //                 return
    //             }

    //             db.posts.deleteAll(error => {
    //                 if (error) {
    //                     done(error)

    //                     return
    //                 }

    //                 db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, (error, insertedUserId) => {
    //                     if (error) {
    //                         done(error)

    //                         return
    //                     }

    //                     const insertedPosts = []

    //                     let count = 1

    //                     const insertedPost1 = { author: insertedUserId, image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                     db.posts.insertOne(insertedPost1, (error, insertedPostId1) => {
    //                         if (error) {
    //                             done(error)

    //                             return
    //                         }

    //                         insertedPosts.push(insertedPost1)

    //                         count++

    //                         const insertedPost2 = { author: insertedUserId, image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                         db.posts.insertOne(insertedPost2, (error, insertedPostId2) => {
    //                             if (error) {
    //                                 done(error)

    //                                 return
    //                             }

    //                             insertedPosts.push(insertedPost2)

    //                             count++

    //                             const insertedPost3 = { author: insertedUserId, image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                             db.posts.insertOne(insertedPost3, (error, insertedPostId3) => {
    //                                 if (error) {
    //                                     done(error)

    //                                     return
    //                                 }

    //                                 insertedPosts.push(insertedPost3)

    //                                 logic.retrievePosts(insertedUserId, (error, posts) => {
    //                                     if (error) {
    //                                         done(error)

    //                                         return
    //                                     }

    //                                     //expect(posts).to.deep.equal(insertedPosts.reverse())

    //                                     expect(posts).to.have.lengthOf(3)

    //                                     const post1 = posts[2]

    //                                     expect(post1.author.username).to.equal('peperoni')
    //                                     expect(post1.author.id).to.equal(insertedUserId)
    //                                     expect(post1.image).to.equal(insertedPost1.image)
    //                                     expect(post1.text).to.equal(insertedPost1.text)
    //                                     expect(post1.date).to.equal(insertedPost1.date)

    //                                     const post2 = posts[1]

    //                                     expect(post2.author.username).to.equal('peperoni')
    //                                     expect(post2.author.id).to.equal(insertedUserId)
    //                                     expect(post2.image).to.equal(insertedPost2.image)
    //                                     expect(post2.text).to.equal(insertedPost2.text)
    //                                     expect(post2.date).to.equal(insertedPost2.date)

    //                                     const post3 = posts[0]

    //                                     expect(post3.author.username).to.equal('peperoni')
    //                                     expect(post3.author.id).to.equal(insertedUserId)
    //                                     expect(post3.image).to.equal(insertedPost3.image)
    //                                     expect(post3.text).to.equal(insertedPost3.text)
    //                                     expect(post3.date).to.equal(insertedPost3.date)

    //                                     done()
    //                                 })
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })

    //     it('fails orphan post', done => {
    //         db.users.deleteAll(error => {
    //             if (error) {
    //                 done(error)

    //                 return
    //             }

    //             db.posts.deleteAll(error => {
    //                 if (error) {
    //                     done(error)

    //                     return
    //                 }

    //                 db.users.insertOne({ name: 'Pepe Roni', birthdate: '2000-01-01', email: 'pepe@roni.com', username: 'peperoni', password: '123qwe123' }, (error, insertedUserId) => {
    //                     if (error) {
    //                         done(error)

    //                         return
    //                     }

    //                     const insertedPosts = []

    //                     let count = 1

    //                     const insertedPost1 = { author: insertedUserId, image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                     db.posts.insertOne(insertedPost1, (error, insertedPostId1) => {
    //                         if (error) {
    //                             done(error)

    //                             return
    //                         }

    //                         insertedPosts.push(insertedPost1)

    //                         count++

    //                         const insertedPost2 = { author: insertedUserId, image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                         db.posts.insertOne(insertedPost2, (error, insertedPostId2) => {
    //                             if (error) {
    //                                 done(error)

    //                                 return
    //                             }

    //                             insertedPosts.push(insertedPost2)

    //                             count++

    //                             const insertedPost3 = { author: 'unknown-user-id', image: `http://images.com/${count}`, text: `hello post ${count}`, date: new Date().toLocaleDateString('en-CA') }

    //                             db.posts.insertOne(insertedPost3, (error, insertedPostId3) => {
    //                                 if (error) {
    //                                     done(error)

    //                                     return
    //                                 }

    //                                 insertedPosts.push(insertedPost3)

    //                                 logic.retrievePosts(insertedUserId, (error, posts) => {
    //                                     expect(error).to.be.instanceOf(Error)
    //                                     expect(error.message).to.equal('post owner not found')

    //                                     expect(posts).to.be.undefined

    //                                     done()
    //                                 })
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })

    // TODO test all methods

    after(done => {
        client.close()
            .then(() => done())
            .catch(done)
    })
})