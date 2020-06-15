// https://www.w3.org/TR/?tag=css
var lis = document.getElementById('container').children
var result = []

for (var li of lis) {
  var isCSS = li.getAttribute('data-tag').match(/css/)
  if (isCSS) {
    var name = li.children[1].innerText
    var url = li.children[1].children[0].href
    result.push({
      name,
      url,
    })
  }
}

console.log(result)
