const objects = [
  eval,
  isFinite,
  isNaN,
  parseFloat,
  parseInt,
  decodeURI,
  decodeURIComponent,
  encodeURI,
  encodeURIComponent,
  Array,
  Date,
  RegExp,
  Promise,
  Proxy,
  Map,
  WeakMap,
  Set,
  WeakSet,
  Function,
  Boolean,
  String,
  Number,
  Symbol,
  Object,
  Error,
  EvalError,
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError,
  URIError,
  ArrayBuffer,
  SharedArrayBuffer,
  DataView,
  Float32Array,
  Float64Array,
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Uint8ClampedArray,
  Atomics,
  JSON,
  Math,
  Reflect,
]

const set = new Set()
const existSet = []
const routes = new Set()
const arr = []
let id = -1

const map = {}
let size = 0
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
let colorId = 0

while (objects.length) {
  const cur = objects.shift()

  let name = ''
  if (typeof cur === 'object') {
    name = cur[Symbol.toStringTag]
  }
  if (typeof cur === 'function') {
    name = cur.name
  }

  routes.add(name)
  const idx = ++id
  const o = {
    id: idx + '',
    label: name,
  }
  arr.push(o)
  set.add(cur)

  size = 100
  colorId = 0

  map[idx] = {
    nodes: [
      {
        ...o,
        size,
        color: colors[colorId],
      },
    ],
    edges: [],
    size,
  }

  ++colorId
  loop(cur, name, id)

  function loop(obj, path = '', pid) {
    const props = Object.getOwnPropertyNames(obj)

    for (const p of props) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, p)
      const val = descriptor.value
      const getter = descriptor.get
      const setter = descriptor.set

      if (set.has(val)) {
        existSet.push(val)
        continue
      }

      if (val !== null && (typeof val === 'object' || typeof val === 'function')) {
        const route = path + '.' + p
        routes.add(route)

        const subId = ++id

        const o = {
          id: subId + '',
          label: route,
        }
        arr.push({
          ...o,
          pid,
        })

        set.add(val)

        map[idx].nodes.push({
          ...o,
          size: size * 0.75,
          isLeaf: true,
          color: colors[colorId],
        })
        map[idx].edges.push({
          source: pid + '',
          target: subId + '',
        })

        ++colorId
        loop(val, route, id)
        --colorId
      }

      if (getter) {
        const route = path + '.' + (getter.name || 'get ' + p)
        routes.add(route)

        const subId = ++id
        const o = {
          id: subId + '',
          label: route,
        }
        arr.push({
          ...o,
          pid,
        })

        set.add(val)

        map[idx].nodes.push({
          ...o,
          size: size * 0.75,
          isLeaf: true,
          color: colors[colorId],
        })
        map[idx].edges.push({
          source: pid + '',
          target: subId + '',
        })
      }
      if (setter) {
        const route = path + '.' + (setter.name || 'set ' + p)
        routes.add(route)

        const subId = ++id
        const o = {
          id: subId + '',
          label: route,
        }
        arr.push({
          ...o,
          pid,
        })

        set.add(val)

        map[idx].nodes.push({
          ...o,
          size: size * 0.75,
          isLeaf: true,
          color: colors[colorId],
        })
        map[idx].edges.push({
          source: pid + '',
          target: subId + '',
        })
      }
    }
  }
}

console.log(set)
console.log(routes)
console.log(existSet)
console.log(arr)
console.log(map)

/**
{
  O: {
    nodes: [],
    edges: []
  },
  1: {
    nodes: [],
    edges: []
  },
}
 */
