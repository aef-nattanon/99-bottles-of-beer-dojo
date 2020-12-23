export default class Bottles {
  song() {
    return this.verses(99, 0)
  }
  verses(hi, lo) {
    return downTo(hi, lo).map(n => this.verse(n)).join('\n')
  }
  verse(n) {
    switch (n) {
      case 0:
        return `No more bottle of beer on the wall, no more bottle of beer. There's nothing else to fall, because there's no more bottle of beer on the wall.`
      case 1:
        return `one bottle of beer on the wall, one bottle of beer. Take one down, pass it around, No more bottle of beer on the wall.`
      case 2:
        return `2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, one bottle of beer on the wall.`
      default:
        return `${n} bottles of beer on the wall, ${n} bottles of beer. Take one down, pass it around, ${n - 1} bottles of beer on the wall.`
    }
  }
}

const downTo = (max, min) => {
  const number = []
  for (let n = max; n >= min; n--) {
    number.push(n);
  }
  return number;
}
