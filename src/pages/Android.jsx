import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Android({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setPageTitle("CSS LOGO - ANDROID")
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })
    return (
      <div id="main" className="android">
          <div className="container">
              <h2>
                  Android
              </h2>
              <div className="logo">
                <div className="droid">
                  <div className="head">
                    <div className="eyes">
                        <span></span>
                        <span></span>
                    </div>
                  </div>
                 
                  <div className="body">
                  <div className="arms">
                    <span></span>
                    <span></span>
                  </div>
                  
                  <div className="legs"><span></span><span></span></div>
                  </div>
                  
                  <div className="shadow"></div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Android
  