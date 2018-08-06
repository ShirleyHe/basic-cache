class BasicCache {
  constructor () {
    this.list = {}
  }
  set (key, value) {
    this.list[key] = value
  }
  get (key) {
    return this.list[key]
  }
  clear (key) {
    
  }
}

window.BasicCache = BasicCache