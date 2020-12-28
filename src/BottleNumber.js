export default class BottleNumber {
  constructor(n) {
    this.n = n
  }
  successor() {
    return this.n === 0 ? 99 : this.n
  }
  quantity() {
    if (this.n == 0) {
      return "no more"
    } else if (this.n < 0) {
      return 99
    } else {
      return this.n
    }
  }
  container() {
    return this.n <= 1 ? 'bottle' : 'bottles'
  }
  pronoume() {
    return this.n <= 1 ? 'one' : 'it'
  }
}