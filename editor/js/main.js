const loadFile = (event) => {
  const image = document.getElementById('image')
  image.src = window.URL.createObjectURL(event.target.files[0])
}

const editor = () => {
  const value = document.getElementById('select').value
  const image = document.getElementById('image')

  if (value === 'Blur') {
    Jimp.read({ url: image.src })
      .then((img) => {
        img.blur(5).getBase64('image/jpeg', (_error, res) => {
          image.src = res
        })
      })
  }

  if (value === 'Gay') {
    Jimp.read({ url: image.src })
      .then((img) => {
        Jimp.read({ url: 'https://files.catbox.moe/039lwq.png' }).then((fil) => {
          fil.resize(image.width, image.height)

          img.composite(fil, 0, 0).getBase64('image/png', (_error, res) => {
            image.src = res
          })
        })
      })
  }

  if (value === 'Mario') {
    Jimp.read({ url: 'https://files.catbox.moe/w920tv.jpg' })
      .then((background) => {
        Jimp.read({ url: image.src })
          .then((img) => {
            img.resize(180, 180)

            background.composite(img, 100, 80).getBase64('image/jpeg', (_error, res) => {
              image.src = res
            })
          })
      })
  }
}
