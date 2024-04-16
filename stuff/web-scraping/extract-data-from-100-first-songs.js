// inside suno.ai web-app (and after one human interaction)

var songs = document.querySelectorAll('.genreItem')

var data = []

    ; (function extractUrl(index) {
        if (index < 10) {
            var song = songs[index]

            song.click()

            setTimeout(() => {
                var url = document.querySelector('audio').src

                var item = { text: song.innerText, url }

                data.push(item)

                console.log(item)

                extractUrl(index + 1)
            }, 1000)
        } else console.log(JSON.stringify(data))
    })(0)