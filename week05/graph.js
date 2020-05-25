const width = window.innerWidth
const height = window.innerHeight
const container = document.getElementById('container')

const datas = Object.values(map)
const len = datas.length
let i = location.hash.substr(1) || 0

const prev = document.getElementById('prev')
const next = document.getElementById('next')

prev.addEventListener('click', () => {
  i--
  if (i < 0) i = len - 1
  location.hash = i
  run()
})
next.addEventListener('click', () => {
  i++
  if (i > len - 1) i = 0
  location.hash = i
  run()
})

let graph

run()

function run() {
  if (graph) {
    graph = null
    container.innerHTML = ''
  }
  graph = new G6.Graph({
    container: 'container',
    width,
    height,
    layout: {
      type: 'force',
      preventOverlap: true,
      linkDistance: (d) => {
        if (d.source.id === 'node0') {
          return 100
        }
        return 300
      },
      nodeStrength: (d) => {
        if (d.isLeaf) {
          return -50
        }
        return -10
      },
      edgeStrength: (d) => {
        if (d.source.id === 'node1' || d.source.id === 'node2' || d.source.id === 'node3') {
          return 0.7
        }
        return 0.1
      },
    },
    defaultNode: {
      color: '#5B8FF9',
      style: {
        lineWidth: 2,
        fill: '#C6E5FF',
      },
    },
    defaultEdge: {
      size: 1,
      color: '#e2e2e2',
    },
  })

  const data = datas[i]
  console.log(data, i)
  const nodes = data.nodes
  graph.data({
    nodes,
    edges: data.edges.map(function (edge, i) {
      edge.id = 'edge' + i
      return Object.assign({}, edge)
    }),
  })
  graph.render()

  graph.on('node:dragstart', function (e) {
    graph.layout()
    refreshDragedNodePosition(e)
  })
  graph.on('node:drag', function (e) {
    refreshDragedNodePosition(e)
  })
  graph.on('node:dragend', function (e) {
    e.item.get('model').fx = null
    e.item.get('model').fy = null
  })

  function refreshDragedNodePosition(e) {
    const model = e.item.get('model')
    model.fx = e.x
    model.fy = e.y
  }
}
