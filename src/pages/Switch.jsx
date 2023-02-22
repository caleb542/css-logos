import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Switch({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setPageTitle("CSS LOGOS - NINTENDO SWITCH")  
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })

  return (
    <div id="main" className="switch">
        <div className="container">
            <div>
            <h2>
                <span>NINTENDO</span>
                <span>SWITCH</span>
            </h2>
            <div className="logo">
                <div className="clear">
                    <div className="controller"></div>
                </div>
                <div className="solid">
                    <div className="controller"></div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Switch
