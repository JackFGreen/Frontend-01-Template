function start(s) {
  if (s === 'a') return findB
  return start
}

function findB(s) {
  if (s === 'b') return findA2
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

function findA3(s) {
  if (s === 'a') return findB3
  return start
}

function findB3(s) {
  if (s === 'b') return findX
  return start
}
function findX(s) {
  if (s === 'x') return end
  return findA3(s)
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

const data = ['abababx', 'ababab0bx', 'ababababx']
const res = data.map((s) => run(s))
console.log(res)
