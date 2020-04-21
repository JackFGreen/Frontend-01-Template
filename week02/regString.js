const rule = {
  singleQuote: /^'.*'$/,
  doubleQuote: /^".*"$/,
}

function regString(s, reg) {
  if (reg.test(s)) return s
  return 'Invalid String - ' + s
}

const single = ["'single'", '"double"']
const singleRes = single.map((s) => regString(s, rule.singleQuote))
console.log(singleRes)

const double = ['"double"', "'single'"]
const doubleRes = double.map((s) => regString(s, rule.doubleQuote))
console.log(doubleRes)
