const loadFile = (event) => $('#image').attr('src', window.URL.createObjectURL(event.target.files[0]))

const editor = async () => {
  const value = $('#select').val()
  const image = $('#image')

  if (value === 'Blur') {
    const img = await Jimp.read({ url: image.attr('src') })

    img.blur(5)

    image.attr('src', await img.getBase64Async('image/jpeg'))
  }

  if (value === 'Gay') {
    const img = await Jimp.read({ url: image.attr('src') })
    const filter = await Jimp.read({ url: 'https://files.catbox.moe/039lwq.png' })

    filter.resize(img.bitmap.width, img.bitmap.height)
    img.composite(filter, 0, 0)

    image.attr('src', await img.getBase64Async('image/jpeg'))
  }

  if (value === 'Mario') {
    const img = await Jimp.read({ url: image.attr('src') })
    const background = await Jimp.read({ url: 'https://files.catbox.moe/w920tv.jpg' })

    img.resize(180, 180)
    background.composite(img, 100, 80)

    image.attr('src', await background.getBase64Async('image/jpeg'))
  }
}
