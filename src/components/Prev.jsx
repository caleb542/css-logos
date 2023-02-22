import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate} from "react-router-dom"
 import { FaChevronCircleLeft}  from 'react-icons/fa'

function Prev({isPrevDisabled, onClick}) {
    return (
      <div className='prev'>
        <button
        tab-index="0"
        onClick={onClick}
        disabled={isPrevDisabled ? true:false}
        aria-label='Previous'
        >
       <FaChevronCircleLeft/>
        </button>
      </div>
    )
}

export default Prev
