import BottleNumber from './BottleNumber'
export default class Bottles {
  song() {
    return this.verses(99, 0)
  }
  verses(hi, lo) {
    return downTo(hi, lo).map(n => this.verse(n)).join('\n')
  }
  verse(n) {
    const number = new BottleNumber(n)
    const numberSecondary = new BottleNumber(n - 1)
    return `${number.quantity()} ${number.container()} of beer on the wall, ${n} ${number.container(n)} of beer. Take one down, pass ${number.pronoume()} around, ${number.container()} ${numberSecondary.quantity()} of beer on the wall.`
  }

}

const downTo = (max, min) => {
  const number = []
  for (let n = max; n >= min; n--) {
    number.push(n);
  }
  return number;
}

