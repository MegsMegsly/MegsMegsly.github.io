const loadFile = (event) => {
  const image = document.getElementById('image')
  image.src = window.URL.createObjectURL(event.target.files[0])
}

const editor = async () => {
  const value = document.getElementById('select').value
  const image = document.getElementById('image')

  if (value === 'Blur') {
    const img = await Jimp.read({ url: image.src })

    img.blur(5)

    image.src = await img.getBase64Async('image/jpeg')
  }

  if (value === 'Gay') {
    const img = await Jimp.read({ url: image.src })
    const filter = await Jimp.read({ url: 'https://files.catbox.moe/039lwq.png' })

    filter.resize(image.width, image.height)
    img.composite(filter, 0, 0)

    image.src = await img.getBase64Async('image/jpeg')
  }

  if (value === 'Mario') {
    const img = await Jimp.read({ url: image.src })
    const background = await Jimp.read({ url: 'https://files.catbox.moe/w920tv.jpg' })
    
    img.resize(180, 180)
    background.composite(img, 100, 80)

    image.src = background.getBase64Async('image/jpeg')
  }
}
