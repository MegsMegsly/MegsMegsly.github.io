const loadFile = (event) => {
  $('#image').attr('src', window.URL.createObjectURL(event.target.files[0]))

  if ($('#select :selected').text().toLowerCase() !== 'none') {
    $('#select').val('None')
  }
}

const readImage = (image) => Jimp.read({ url: typeof image !== 'string' ? image.attr('src') : image })
const updateImage = async (image, source) => image.attr('src', await source.getBase64Async('image/jpeg'))

const presets = {
  async blur (source) {
    const image = await readImage(source)

    image.blur(5)

    updateImage(source, image)
  },

  async invert (source) {
    const image = await readImage(source)

    image.invert()

    updateImage(source, image)
  },

  async fisheye (source) {
    const image = await readImage(source)

    image.fisheye({ r: 2.2 })

    updateImage(source, image)
  },

  async gay (source) {
    const image = await readImage(source)
    const filter = await readImage('./assets/png/gay.png')

    filter.resize(image.bitmap.width, image.bitmap.height)
    image.composite(filter, 0, 0)

    updateImage(source, image)
  },

  async trans (source) {
    const image = await readImage(source)
    const filter = await readImage('./assets/png/trans.png')

    filter.resize(image.bitmap.width, image.bitmap.height)
    image.composite(filter, 0, 0)

    updateImage(source, image)
  },

  async mario (source) {
    const image = await readImage(source)
    const background = await readImage('./assets/jpeg/mario.jpg')

    image.resize(180, 180)
    background.composite(image, 100, 80)

    updateImage(source, background)
  }
}

const editor = () => presets[$('#select').val().toLowerCase()]($('#image'))
