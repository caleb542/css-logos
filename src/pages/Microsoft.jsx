import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Microsoft({ setBodyId, pageTitle, setPageTitle, pageNumber, setPageNumber,setIsPrevDisabled,setIsNextDisabled }) {
  const location = useLocation()
  const loc = location.pathname.substring(1)
  
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
  useEffect(()=>{
    setBodyId("microsoft")
    setPageTitle("CSS LOGOS - MICROSOFT")
    checkDisabled(loc)
    setPageNumber(updatePage(loc))
  })
  
  return (
    <div id="main" className="microsoft">
        <div className="container">
            <h2>
            Microsoft
            </h2>
            <div className="logo">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        </div>
    </div>

  )
}

export default Microsoft
