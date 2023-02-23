import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function Adidas({setBodyId, pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
          setPageTitle("CSS LOGOS - ADIDAS")
          setBodyId("adidas")
          checkDisabled(loc)
          setPageNumber(updatePage(loc))
        })

  return (
    <div id="main" className="adidas">
        <div className="container">
            
            <div className="logo">
                <div className="flower">
                    <div className="petal">
                        <div className="half1"></div>
                        <div className="half2"></div>
                    </div>
                    <div className="petal">
                        <div className="half1"></div>
                        <div className="half2"></div>
                    </div>
                    <div className="petal">
                        <div className="half1"></div>
                        <div className="half2"></div>
                    </div>
                    <div className="bars">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                </div>
      
                     <h2 className='adidas'>adidas</h2>
              
                
            </div>
        </div>
    </div>
  )
}

export default Adidas
