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
            showFeedback(error)
        }
    }
}