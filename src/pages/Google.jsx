import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Google({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
      setPageTitle("CSS LOGOS - GOOGLE")
      checkDisabled(loc)
      setPageNumber(updatePage(loc))
    })
  return (
    <div id="main" className="google container" >
        <h2>Google</h2>
        <div className="google">
            <div className="logo"></div>
            <div className="octo"></div>
        </div>
    </div>
  )
}

export default Google
