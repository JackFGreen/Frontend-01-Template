/**
{
  // 0-127
  '0000 0000-0000 007F': '0xxxxxxx',
  // 128-2047
  '0000 0080-0000 07FF': '110xxxxx 10xxxxxx',
  // 2048-65535
  '0000 0800-0000 FFFF': '1110xxxx 10xxxxxx 10xxxxxx',
  // 65536-1114111
  '0001 0000-0010 FFFF': '11110xxx 10xxxxxx 10xxxxxx 10xxxxxx',
}
 */

function getRange(s) {
  const decimal = parseInt(s, 16)
  if (decimal <= parseInt('007F', 16)) {
    //           210
    //           567
    return '0xxxxxxx'
  }
  if (decimal <= parseInt('07FF', 16)) {
    return '110xxxxx10xxxxxx'
  }
  if (decimal <= parseInt('FFFF', 16)) {
    return '1110xxxx10xxxxxx10xxxxxx'
  }
  if (decimal <= parseInt('0010FFFF', 16)) {
    return '11110xxx10xxxxxx10xxxxxx10xxxxxx'
  }
}

function getBinary(s) {
  return s.codePointAt(0).toString(2)
}

function getHex(s) {
  return s.codePointAt(0).toString(16)
}

function replaceX(n, s) {
  const len = n.length
  let i = len - 1

  const sLen = s.length
  let j = sLen - 1

  let res = s

  while (i >= 0) {
    const cur = n[i]

    while (s[j] && s[j] !== 'x') {
      j--
    }

    const pre = res.substr(0, j)
    const end = res.substr(j + 1)

    res = pre + cur + end

    i--
    j--
  }

  res = res.replace(/x/g, '0')
  return res
}

function UTF8_Encoding(str) {
  if (!str) return
  console.log('>', str)

  const strBinary = getBinary(str)
  console.log('> Binary', strBinary)

  const strHex = getHex(str)
  console.log('> Hex', strHex)

  const range = getRange(strHex)
  console.log('> Range', range)

  const sBinary = replaceX(strBinary, range)
  console.log('< Binary', sBinary)

  const sHex = parseInt(sBinary, 2).toString(16)
  console.log('< Hex', sHex)

  //return new Buffer();
  return sHex
}
UTF8_Encoding('严')
