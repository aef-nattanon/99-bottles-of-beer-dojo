export default class Bottles {
  song() {
    return this.verses(99, 0)
  }
  verses(hi, lo) {
    return downTo(hi, lo).map(n => this.verse(n)).join('\n')
  }
  verse(n) {
    return `${this.quantity(n)} ${this.container(n)} of beer on the wall, ${n} ${this.container(n)} of beer. Take one down, pass ${this.pronoume(n)} around, ${this.container(n)} ${this.quantity(n - 1)} of beer on the wall.`
  }
  quantity(n) {
    if (n == 0) {
      return "no more"
    } else if (n < 0) {
      return 99
    } else {
      return n
    }
  }
  container(n) {
    return n <= 1 ? 'bottle' : 'bottles'
  }
  pronoume(n) {
    return n <= 1 ? 'one' : 'it'
  }
}

const downTo = (max, min) => {
  const number = []
  for (let n = max; n >= min; n--) {
    number.push(n);
  }
  return number;
}
