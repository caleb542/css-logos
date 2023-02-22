import { useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import updatePage from './scripts/updatePage'
import pages from './scripts/pages'
import totalPages from './scripts/totalPages'

function McDonalds({pageTitle, setPageTitle, pageNumber, setPageNumber, setIsNextDisabled, setIsPrevDisabled}) {
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
          setPageTitle("CSS LOGOS - McDONALDS")
          checkDisabled(loc)
          setPageNumber(updatePage(loc))
        })
    return (

<div id="main" className="mcdonalds container">
    <h2>McDonalds</h2>
    <div className="logo">
        <div className="left">
            <div className="arch1 arch"></div>
            <div className="arch2 arch"></div>
            <div className="glow">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
            <div className="inner">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
            <div className="hole">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
            <div className="triangle1 triangle"></div>
            <div className="triangle2 triangle"></div>
        </div>
        <div className="right">
            <div className="arch1 arch"></div>
            <div className="arch2 arch"></div>
            <div className="glow">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
            <div className="inner">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
            <div className="triangle1 triangle"></div>
            <div className="hole">
                <div className="arch1 arch"></div>
                <div className="arch2 arch"></div>
            </div>
        </div>
        <div className="border1"></div>
        <div className="border2"></div>
    </div>
</div>
    )
  }
  
  export default McDonalds
  

