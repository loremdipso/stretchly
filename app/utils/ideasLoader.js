const Shuffled = require('./shuffled')

class IdeasLoader {
  constructor (data) {
    this.data = data
  }

  ideas () {
    return new Shuffled(
      this.data.filter(item => item.enabled)
    )
  }
}
module.exports = IdeasLoader
