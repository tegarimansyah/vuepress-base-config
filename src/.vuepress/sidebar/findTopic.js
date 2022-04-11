const getConfig = require("vuepress-bar");
const path = "./src"
const { sidebar } = getConfig(path, { maxLevel:4 })

const sb = sidebar.filter((el) => el !== 'index')

function appendSlash(obj) {

  if (typeof obj === 'string') return '/' + obj
  
  if (typeof obj.children[0] === 'string') {
    obj.children = obj.children.map(
      (el) => {
        if (typeof el === 'string' ) {
          return '/' + el
        } else {
          // console.log(el)
          el.children = el.children.map(appendSlash)
          return el
        }
      }
    )
  } else if (typeof obj.children[0] === 'object') {
    obj.children = obj.children.map(appendSlash)
  }

  return obj
}

function findTopicRecursive(obj, title) {
  // DFS
  const result = obj.map( el => {
    if (el.title.toLowerCase() === title.toLowerCase()) {
      el.collapsable = false
      return appendSlash(el)
    } else if (el.children !== undefined && typeof el.children[0] === 'object') {
      return findTopicRecursive(el.children, title)
    }
  }).filter(Boolean)[0]

  return result
}

module.exports = function findTopic(title) {
  const result = findTopicRecursive(sb, title)
  console.log(JSON.stringify(result, null, 2))
  return result
}
