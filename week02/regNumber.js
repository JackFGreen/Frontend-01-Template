// './numeric-literals.md'

const numberReg = {
  decimal: /^((\+|\-)?(((0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?)|(\.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?)|((0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?)))$/,
  binary: /^(0(b|B)(0|1)+)$/,
  octal: /^(0(o|O)[0-7]+)$/,
  hex: /^(0(x|X)[0-9a-fA-F]+)$/,
}

function regNumber(s, reg) {
  if (reg.test(s)) return s + ' - Match Number - ' + s.match(reg)[0]
  return '    Invalid Number - ' + s
}

const decimal = [
  '0',
  '01',
  '0.1',
  '.1',
  '.1e3',
  '.1e-3',
  '.1e--3',
  '1.0',
  '1.',
  '1e3',
  '1e-3',
  '1e--3',
  '.',
  '1.e3',
  '1.0e3',
  '1.0e-3',
  '1.0e--3',
  '-0123',
  '-123',
  '-12.3',
  '-12.34',
  '-.123',
  '-123.',
]
const decimalRes = decimal.map((s) => regNumber(s, numberReg.decimal))
console.log(decimalRes)

const binary = ['0b10', '0b12', '0B10', '0B12']
const binaryRes = binary.map((s) => regNumber(s, numberReg.binary))
console.log(binaryRes)

const octal = ['0o17', '0o18', '0O17', '0O18']
const octalRes = octal.map((s) => regNumber(s, numberReg.octal))
console.log(octalRes)

const hex = ['0xFF', '0xFG', '0XFF', '0XFG']
const hexRes = hex.map((s) => regNumber(s, numberReg.hex))
console.log(hexRes)

console.log(`
---
`)

const fullNumberReg = /^(((\+|\-)?(((0|([1-9]([0-9]+)?))\.([0-9]+)?((e|E)((\+|\-)?([0-9]+)))?)|(\.([0-9]+)((e|E)((\+|\-)?([0-9]+)))?)|((0|([1-9]([0-9]+)?))((e|E)((\+|\-)?([0-9]+)))?)))|(0(b|B)(0|1)+)|(0(o|O)[0-7]+)|(0(x|X)[0-9a-fA-F]+))$/

const allNums = [...decimal, ...binary, ...octal, ...hex]
const allRes = allNums.map((s) => regNumber(s, fullNumberReg))
console.log(allRes)
