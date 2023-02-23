const API = () => {
  const url = 'http://localhost:3000'

  return {
    buscar() {
      return fetch(`${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
      }
      })
    },
    // buscarID() {
    //   return fetch(`${url}/:id`, {
    //     method: 'GET'
    //   })
    // }
  }

}
export default API