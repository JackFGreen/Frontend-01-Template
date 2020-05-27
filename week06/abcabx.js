function start(s) {
  if (s === 'a') return findB
  return start
}

function findB(s) {
  if (s === 'b') return findC
  return start
}

function findC(s) {
  if (s === 'c') return findA2
  return start
}

function findA2(s) {
  if (s === 'a') return findB2
  return start
}

function findB2(s) {
  if (s === 'b') return findX
  return start
}

function findX(s) {
  // c || x
  if (s === 'x') return end
  return findC(s)
}

function end() {
  return end
}

function run(str) {
  let state = start
  for (const s of str) {
    state = state(s)
  }
  return [state === end, state]
}

const data = ['abcabx', 'abcabcabx']
const res = data.map((s) => run(s))
console.log(res)
