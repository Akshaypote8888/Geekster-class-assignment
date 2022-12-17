// var p = new Promise((resolve, reject) => {
//     reject(Error('The Fails!'))
//   })
//   p.catch(error => console.log(error.message))
//   p.catch(error => console.log(error.message))

// new Promise((resolve, reject) => {
//     resolve('Success!')
//   })
//   .then(() => {
//     throw Error('Oh noes!')
//   })
//   .catch(error => {
//     return "actually, that worked"
//   })
//   .catch(error => console.log(error.message))


Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
  })
  .then(data => {
    console.log(data)
  })