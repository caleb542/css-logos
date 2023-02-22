
import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function ReactLogo({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setPageTitle("CSS LOGOS - REACT")
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })
  return (
    <div id="main" className="react container">
      <div className="container">
        <h2>
        React
        </h2>
        <div className="logo">
          <div className="nucleas"></div>
          <div className="electrons"></div>
        </div>
      </div>
    </div>
  )
}

export default ReactLogo
