const dataArray = require("./data.js")

const data = dataArray.map((item) => {
  return {
    ...item,
    categories: item.categories.join(", "),
  }
})

console.log(data)
