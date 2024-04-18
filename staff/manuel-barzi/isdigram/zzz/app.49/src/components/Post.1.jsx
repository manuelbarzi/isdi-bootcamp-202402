import { logger, showFeedback } from '../utils'

import { useNavigate } from 'react-router-dom'

import logic from '../logic'

function Post(props) {
    const navigate = useNavigate()

    const handleDeleteClick = postId => {
        if (confirm('delete post?'))
            try {
                logic.removePost(postId)

                props.onDeleted()
            } catch (error) {
                showFeedback(error)
            }
    }

    const handleEditClick = post => props.onEditClick(post)

    const handleUsernameClick = event => {
        event.preventDefault()

        navigate(`/profile/${post.author.username}`)
    }


    logger.debug('Post -> render')

    const { item: post } = props

    return <article>
        <h3><a href="" onClick={handleUsernameClick}>{post.author.username}</a></h3>

        <img src={post.image} />

        <p>{post.text}</p>

        <time>{new Date(post.date).toLocaleString('en-CA')}</time>

        {logic.getLoggedInUserId() === post.author.id && <>
            <button onClick={() => handleDeleteClick(post.id)}>🗑️</button>
            <button onClick={() => handleEditClick(post)}>📝</button>
        </>}
    </article>
}

export default Post