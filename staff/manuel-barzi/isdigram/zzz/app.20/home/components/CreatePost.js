class CreatePost extends Component {
    constructor() {
        super('section')

        const title = new Component('h2')
        title.setText('Create Post')

        const form = new Component('form')

        const imageLabel = new Label
        imageLabel.setFor('image')
        imageLabel.setText('Image')

        const imageInput = new Input
        imageInput.setId('image')
        imageInput.setType('text')

        const textLabel = new Label
        textLabel.setFor('text')
        textLabel.setText('Text')

        const textInput = new Input
        textInput.setId('text')
        textInput.setType('text')

        const createButton = new Button
        createButton.setType('submit')
        createButton.setText('Create')

        form.add(imageLabel, imageInput, textLabel, textInput, createButton)

        const cancelButton = new Button
        cancelButton.onClick(() => {
            // TODO dismount create post
        })
    }
}