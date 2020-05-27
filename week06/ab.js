function start(s) {
  if (s === 'a') return findB
  return start
}

function findB(s) {
  if (s === 'b') return end
  return start(s)
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

const data = ['ab', 'aa', 'acb', 'aab']
const res = data.map((s) => run(s))
console.log(res)
