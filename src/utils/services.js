export const ServiceFunctions = {
    buildQueryStringForObject (params = {}) {
      const esc = encodeURIComponent
      return Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&')
    },
    paginate (arr, perPage, page) {
      page -= 1 // Start pages at 0
      const basePage = page * perPage
      const data = page < 0 || perPage < 1 || basePage >= arr.length ? [] : arr.slice(basePage, basePage + perPage)
      return data
    },
    getErrors (err) {
      let errors = []
      if (err) {
        errors = err
        if (err.response) {
          errors = err.response
          if (err.response.data) {
            errors = err.response.data
            if (err.response.data.errors) {
              errors = err.response.data.errors
            }
          }
        }
      }
      return errors
    },
  }
  