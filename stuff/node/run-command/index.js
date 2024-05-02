import child_process from 'child_process'
import util from 'util'

const exec = util.promisify(child_process.exec)

const file = 'audio.m4a'

//exec(`cd files; whisper ${file}`)
exec(`whisper files/${file} --output_dir files --output_format txt`)
    .then(() => console.log('ended'))
    .catch(error => console.error(error))

