const rule = {
  decimal: /^(\d+\.|\d+|\d*\.\d+|\d+e\-?\d+)$/,
  binary: /^0b[0-1]+$/,
  octal: /^0o[0-7]+$/,
  hex: /^0x[0-9A-F]+$/i,
}

function regNumber(s, reg) {
  if (reg.test(s)) return s
  return 'Invalid Number - ' + s
}

const decimal = ['0', '0', '0.1', '.1', '1e3', '1e-3', '1e--3', '.']
const decimalRes = decimal.map((s) => regNumber(s, rule.decimal))
console.log(decimalRes)

const binary = ['0b10', '0b12']
const binaryRes = binary.map((s) => regNumber(s, rule.binary))
console.log(binaryRes)

const octal = ['0o17', '0o18']
const octalRes = octal.map((s) => regNumber(s, rule.octal))
console.log(octalRes)

const hex = ['0xFF', '0xFG']
const hexRes = hex.map((s) => regNumber(s, rule.hex))
console.log(hexRes)
