import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import pages from './scripts/pages'
import updatePage from './scripts/updatePage'
import totalPages from './scripts/totalPages'

function Figma({setBodyId, pageTitle, setPageTitle, pageNumber, setPageNumber, isNextDisabled, setIsNextDisabled, isPrevDisabled, setIsPrevDisabled}) {

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
   setBodyId("figma")
   setPageTitle("CSS LOGOS - FIGMA") 
   checkDisabled(loc)
   
  })
  return (
    <div id="main" className="figma">
        <div className="container">
            <h2>
                Figma
            </h2>
            <div className="logo">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        </div>
    </div>
  )
}

export default Figma
