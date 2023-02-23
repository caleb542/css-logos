import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Youtube({setBodyId, pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setBodyId("youtube")
      setPageTitle("CSS LOGO - YOUTUBE")
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })
  return (
    <div id="main" className="youtube">
        <div className="container">
            <h2>
            Youtube
            </h2>
            <div className="logo">
                <div className="cell">
                    <div className="play"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Youtube
