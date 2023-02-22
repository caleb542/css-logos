
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import pages from "../pages/scripts/pages"
import totalPages from "../pages/scripts/totalPages"

import Next from "./Next"
import Prev from "./Prev"


function NextPrev({ pageNumber, isPrevDisabled, isNextDisabled }) {

    const navigate = useNavigate()
    const location = useLocation().pathname
    const loc = location.substring(1)
    
    function navigateSomewhereNext(){
        const nextPage = pages[pageNumber]
        navigate(nextPage)
    }
    function navigateSomewherePrev(){
        const prevPage = pages[pageNumber - 2]
        navigate(prevPage)
    }
    const total = totalPages()
  return (<>
    <div className="num" >
            <div>
                {pageNumber} / {total}
            </div>
    </div>
    <div className="nextprev">
        
        <div className="buttons">
            <Prev
            onClick={() => navigateSomewherePrev()}
            isPrevDisabled={isPrevDisabled}
            />
            <Next 
            onClick={() => navigateSomewhereNext()}
            isNextDisabled={isNextDisabled}
            />    
        </div>
    </div>
    </>
  )
}

export default NextPrev
