const rule = /^(("(([^"\\(\u000A|\u000D|\u2028|\u2029)]|(\u000A|\u000D|\u2028|\u2029)|\u2029|\\((['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2028\u2029])|(0(?![0-9]))|(x[0-9a-fA-F]{2})|(u[0-9a-fA-F]{4}|[\u0000-\u10FFFF]))|\\(\u000A|\u000D(?!\u000A)|\u2028|\u2029|\u000D\u000A))+)?")|('(([^'\\(\u000A|\u000D|\u2028|\u2029)]|(\u000A|\u000D|\u2028|\u2029)|\u2029|\\((['"\\bfnrtv]|[^'"\\bfnrtv0-9xu\u000A\u000D\u2028\u2029])|(0(?![0-9]))|(x[0-9a-fA-F]{2})|(u[0-9a-fA-F]{4}|[\u0000-\u10FFFF]))|\\(\u000A|\u000D(?!\u000A)|\u2028|\u2029|\u000D\u000A))+)?'))$/

function regString(s, reg) {
  if (reg.test(s)) return s + ' - Match String - ' + s.match(reg)[0]
  return '    Invalid String - ' + s
}

const strs = [
  '""',
  '"\u4e25"',
  '"a"',
  '"\'"',
  '"""',
  '"\b"',
  '"\f"',
  '"\n"',
  '"\r"',
  '"\t"',
  '"\v"',
  '"a"',
  '"1"',
  '" "',
  '""',
]

const res = strs.map((s) => regString(s, rule))
console.log(res)
