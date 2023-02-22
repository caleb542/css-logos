import pages from './pages.js'
function updatePage(loc) {
    
        const index = pages.findIndex(element => element === loc )

          return  index + 1
      }


export default updatePage
