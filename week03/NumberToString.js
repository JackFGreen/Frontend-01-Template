function num2str(num) {
  const isNegative = num / 0 === -Infinity
  num = Math.abs(num)

  let decimal = Math.floor(num)
  let fraction = num - decimal

  let str = ''

  if (decimal === 0) str = 0

  while (decimal > 0) {
    str = (decimal % 10) + str
    decimal = Math.floor(decimal / 10)
  }

  if (fraction > 0) {
    let s = ''
    while (fraction !== Math.floor(fraction)) {
      fraction *= 10
      s += Math.floor(fraction) % 10
    }
    str = str + '.' + s
  }

  return isNegative ? '-' + str : str
}
const numsArr = [
  // +
  123,
  12.3,
  12.34,
  0.123,
  123,
  // -
  -123,
  -12.3,
  -12.34,
  -0.123,
  -123,
  // +e
  12e3,
  0.12e3,
  1.2e3,
  12e3,
  -12e3,
  -0.12e3,
  -1.2e3,
  -12e3,
  // -e
  12e-3,
  0.12e-3,
  1.2e-3,
  12e-3,
  -12e-3,
  -0.12e-3,
  -1.2e-3,
  -12e-3,
  // 0b
  0b0,
  0b1,
  0b10,
  // 0o
  0o0,
  0o1,
  0o10,
  // 0x
  0x0,
  0x1,
  0x10,
]
const numRes = numsArr.map((s) => [s, num2str(s)])
console.log(numRes)
