import {NavLink} from 'react-router-dom'

function Nav() {
    return (
      <nav id="Nav" className="nav">
         <ul className="navBlock">
            <li className="navItem">
                <NavLink to='/' activeclassname="active">Home</NavLink>
            </li>
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
         </ul>
      </nav>
    )
  }
  
  export default Nav