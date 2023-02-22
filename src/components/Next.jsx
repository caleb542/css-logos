import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate} from "react-router-dom"
import {FaChevronCircleRight} from 'react-icons/fa'

function Next({isNextDisabled, onClick}) {
    return (
      <div className='next'>
        <button
        tabIndex="0"
        onClick={onClick}
        disabled={isNextDisabled ? true:false}
        aria-label='Next'
        >
        <FaChevronCircleRight/>
        </button>
      </div>
    )
}


export default Next
