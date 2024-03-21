import utils from '../utils.mjs'

import logic from '../logic.mjs'

import Component from './core/Component.mjs'
import Post from './Post.mjs'

class PostList extends Component {
    constructor() {
        super('section')

        this.refresh()

        this.startAutoRefresh()
    }

    refresh() {
        try {
            const posts = logic.retrievePosts()

            this.removeAll()

            posts.forEach(post => {
                const post2 = new Post(post)

                post2.onEditClick(post => this._onEditPostClick(post))

                post2.onEdited(() => this.refresh())

                post2.onDeleted(() => this.refresh())

                this.add(post2)
            })
        } catch (error) {
            utils.showFeedback(error)
        }
    }

    startAutoRefresh() {
        this.stopAutoRefresh()

        this._refreshIntervalId = setInterval(() => this.refresh(), 5000)
    }

    stopAutoRefresh() {
        clearInterval(this._refreshIntervalId)
    }

    onEditPostClick(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onEditPostClick = callback
    }
}

export default PostList