import logic from '../../logic/index.ts'
import { errors } from 'com'
import logger from '../../logger.ts'

const {
    ContentError,
    SystemError,
    DuplicityError
} = errors

export default (req, res) => {
    try {
        const { name, birthdate, email, username, password } = req.body

        logic.registerUser(name, birthdate, email, username, password)
            .then(() => res.status(201).send())
            .catch(error => {
                if (error instanceof SystemError) {
                    logger.error(error.message)

                    res.status(500).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof DuplicityError) {
                    logger.warn(error.message)

                    res.status(409).json({ error: error.constructor.name, message: error.message })
                }
            })
    } catch (error) {
        if (error instanceof TypeError || error instanceof ContentError) {
            logger.warn(error.message)

            res.status(406).json({ error: error.constructor.name, message: error.message })
        } else {
            logger.warn(error.message)

            res.status(500).json({ error: SystemError.name, message: error.message })
        }
    }
}