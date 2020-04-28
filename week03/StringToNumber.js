function str2num(str) {
  if (!fullNumberReg.test(str)) return NaN

  const len = str.length

  let num = 0

  let radix = 10
  if (numberReg.binary.test(str)) radix = 2
  if (numberReg.octal.test(str)) radix = 8
  if (numberReg.hex.test(str)) radix = 16

  let i = radix === 10 ? 0 : 2

  const dotCodePoint = '.'.codePointAt()
  const zeroCodePoint = '0'.codePointAt()
  const negativeCodePoint = '-'.codePointAt()
  const exponentCodePoint = 'e'.codePointAt()

  let isNegative = false

  let isDot = false
  let neeDiv = false
  let divPow = 1

  let isExponent = false
  let isNegativeExponent = false
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
      if (!isExponent) {
        isExponent = curCodePoint === exponentCodePoint
        if (isExponent)
          isNegativeExponent = str[i + 1].codePointAt() === negativeCodePoint
      }

      if (neeDiv && !isExponent) {
        num = num + n / 10 ** divPow
        divPow++
      }

      if (needExponent) {
        const rest = str.substr(isNegativeExponent ? i - 1 : i)
        const pow = str2num(rest)
        num = num * 10 ** pow
        num = isNegative ? num * -1 : num
        return num
      }

      if (isExponent) {
        needExponent = true
      } else if (isDot) {
        neeDiv = true
      } else {
        num = num * radix + n
      }
    }

    i++
  }

  num = isNegative ? num * -1 : num
  return num
}
const numStrs = [
  // +
  '0123',
  '123',
  '12.3',
  '12.34',
  '.123',
  '123.',
  // -
  '-0123',
  '-123',
  '-12.3',
  '-12.34',
  '-.123',
  '-123.',
  // +e
  '12e3',
  '.12e3',
  '1.2e3',
  '12.e3',
  '-12e3',
  '-.12e3',
  '-1.2e3',
  '-12.e3',
  // -e
  '12e-3',
  '.12e-3',
  '1.2e-3',
  '12.e-3',
  '-12e-3',
  '-.12e-3',
  '-1.2e-3',
  '-12.e-3',
  // 0b
  '0b0',
  '0b1',
  '0b10',
  '0b102',
  // 0o
  '0o0',
  '0o1',
  '0o10',
  '0o108',
  // 0x
  '0x0',
  '0x1',
  '0x10',
  '0x10g',
]
const numRes = numStrs.map((s) => [s, str2num(s)])
console.log(numRes)
