import utils from '../../utils.mjs'

import logic from '../../logic.mjs'

import Component from '../../Component.mjs'
import Post from './Post.mjs'

class Posts extends Component {
    constructor() {
        super('section')

        try {
            const posts = logic.retrievePosts()

            posts.forEach(post => {
                const post2 = new Post(post)

                this.add(post2)
            })
        } catch (error) {
            utils.showFeedback(error)
        }
    }
}

export default Posts