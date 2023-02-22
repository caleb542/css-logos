import totalPages from "./totalPages"
import pages from "./pages"
import updatePage from "./updatePage"


function checkDisabled() {

        setPageNumber(updatePage(loc))
  
        if(parseInt(updatePage(loc)) === 1){
            setIsPrevDisabled(true)
          }
        else{
            setIsPrevDisabled(false)
        }  
        if(parseInt(updatePage(loc)) === totalPages()) {
          setIsNextDisabled(true)
        }else{
            setIsNextDisabled(false)
        }
      
}

export default checkDisabled
