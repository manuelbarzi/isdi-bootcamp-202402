import express from 'express'
import {
    registerUserHandler,
    authenticateUserHandler,
    retrieveUserHandler,

    retrievePostsHandler,
    createPostHandler
} from './handlers/index.ts'

const { Router, json } = express

const users = Router()
const posts = Router()

const jsonBodyParser = json()

users.post('/', jsonBodyParser, registerUserHandler)
users.post('/auth', jsonBodyParser, authenticateUserHandler)
users.get('/:targetUserId', retrieveUserHandler)

posts.post('/', jsonBodyParser, createPostHandler)
posts.get('/', retrievePostsHandler)

export {
    users,
    posts
}
