import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'

function Flowers({pageNumber, setPageNumber}) {
  const location = useLocation()
  const loc = location.pathname.substring(1)
  useEffect(()=>{

    setPageNumber(updatePage(loc))
  })
  return (
    <div className="circles">
        <div className="container">
            <h1><span>Spi</span>nning F<span>lo</span><span>wer</span>s</h1>
 
        <div className="logo">
            <div className="circle-container">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default Flowers
