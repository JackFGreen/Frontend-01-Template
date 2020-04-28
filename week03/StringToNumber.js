function str2decimal(str) {
  const len = str.length
  let i = 0

  let num = 0

  const dotCodePoint = '.'.codePointAt()
  const zeroCodePoint = '0'.codePointAt()
  const negativeCodePoint = '-'.codePointAt()
  const exponentCodePoint = 'e'.codePointAt()

  let isNegative = false

  let isDot = false
  let neeDiv = false
  let divPow = 1

  let isExponent = false
  let needExponent = false
  let exponentPow = 0

  while (i < len) {
    const cur = str[i]
    const curCodePoint = cur.codePointAt()

    if (curCodePoint === negativeCodePoint) {
      isNegative = true
    } else {
      const n = curCodePoint - zeroCodePoint

      if (!isDot) isDot = curCodePoint === dotCodePoint
      if (!isExponent) isExponent = curCodePoint === exponentCodePoint

      if (neeDiv && !isExponent) {
        num = num + n / 10 ** divPow
        divPow++
      }

      if (needExponent) {
        const rest = str.substr(isNegative ? i - 1 : i)
        const pow = str2decimal(rest)
        return num * 10 ** pow
      }

      if (isExponent) {
        needExponent = true
      } else if (isDot) {
        neeDiv = true
      } else {
        num = num * 10 + n
      }
    }

    i++
  }

  num = isNegative ? num * -1 : num
  return num
}
const decimalStrs = [
  // +
  '0123',
  '123',
  '12.3',
  '12.34',
  '.123',
  '123.',
  // +e
  '12e3',
  '.12e3',
  '1.2e3',
  '12.e3',
  // -
  '-0123',
  '-123',
  '-12.3',
  '-12.34',
  '-.123',
  '-123.',
  // -e
  '12e-3',
  '.12e-3',
  '1.2e-3',
  '12.e-3',
]
console.log('>')
console.log(decimalStrs)
const decimalRes = decimalStrs.map(str2decimal)
console.log('<')
console.log(decimalRes)
// const arr = ['0123', '123', '0b10', '0o10', '0x10']
