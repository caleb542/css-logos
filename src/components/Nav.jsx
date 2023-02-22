import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
    
    const [show, setShow ] = useState(true)
    
    const toggle = (e) => {
        e.preventDefault()
        // alert('clcike')
        setShow(!show)
    }
    return (
        <>
        <button onClick={toggle} className="btn btnNav" tabIndex="0" >
        <div className='dots' style={ show ? { 'rotate':'-90deg','transition':'all 0.4s'}:{'rotate':'0deg','transition':'all 0.4s'}}>
            <div style={ show ? { 'width':'2px','transition':'all 0.4s'}:{'width':'24px',}}></div>
            <div style={ show ? { 'width':'2px'}:{'width':'24px'}}></div><div style={ show ? { 'width':'2px'}:{'width':'24px'}}></div>
        </div>
      
    </button> 
     
      <nav id="Nav" className={show ?'show':'hide'}>
        
        <ul>
        <li>
       
        </li>
        {/*
           <li className="navItem">
                <NavLink to='/' activeclassname="active">Home</NavLink>
            </li>
    */}
         
            <li className="navItem">
                <NavLink to='/figma' activeclassname="active">Figma</NavLink>
            </li>
            <li className="navItem">
                <NavLink to='microsoft' activeclassname="active">Microsoft</NavLink>
            </li>
            <li className="navItem">
                <NavLink to='youtube' activeclassname="active">Youtube</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='reactlogo'>React</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='google'>Google</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='mcdonalds'>McDonalds</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='git'>Git</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='switch'>Switch</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='android'>Android</NavLink>
            </li>
            <li className="navItem">
                <NavLink activeclassname="active" to='adidas'>Adidas</NavLink>
            </li>
            {/*<li className="navItem">
                <NavLink activeclassname="active" to='circles'>Flowers</NavLink>
    </li>*/}
         </ul>
      </nav>
      </>
    )
  }
  
  export default Nav