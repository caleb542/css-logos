import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Git({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setPageTitle("CSS LOGOS - GIT")
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })

    return (
      <div id="main" className="git container" >
          <h2>Git</h2>
          <div className="logo">
              <div className="logo-container">
                <div className="dumb">
                  <div className="dots"></div>
                  <div className="dots"></div>
                  <div className="bar"></div>
                </div>    
                <div className="side">
                 
                  <div className="lines"></div>
              <div className="dots"></div>
                </div>
                  

                <div className="tile">
                  {/* The orange*/}
                </div>
          </div>


                
                
          </div>
      </div>
    )
  }
  
  export default Git
  