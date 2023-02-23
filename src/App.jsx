import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Figma from './pages/Figma'
import Microsoft from './pages/Microsoft'
import Youtube from './pages/Youtube'
import ReactLogo from './pages/ReactLogo'
import Google from './pages/Google'
import Mcdonalds from './pages/Mcdonalds'
import Git from './pages/Git'
import Switch from './pages/Switch'
import Android from './pages/Android'
import Flowers from './pages/Flowers'
import Adidas from './pages/Adidas'
import Nav from './components/Nav'
import NextPrev from './components/NextPrev'
import updatePage from './pages/scripts/updatePage'

function App() {
  const [bodyId, setBodyId] = useState("home")
  const [pageTitle, setPageTitle] = useState("CSS Logos")
  const [pageNumber, setPageNumber] = useState(5)
  const [isNextDisabled, setIsNextDisabled] = useState(false)
  const [isPrevDisabled, setIsPrevDisabled] = useState(false)
  useEffect(() => {
    document.title = pageTitle
    
    })
  

  return (
    <div className="App">
    
      <div id={bodyId} className="pageContainer">
        <Router>
        <Link to="#main" className="tab-only">Skip to content</Link>
         
          
          <header>
            <h1>CSS LOGOS</h1>
            <Nav />
          </header>

          <NextPrev 

          pageNumber={pageNumber}
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          className="nextprev"
          />
          
          <Routes>
          
          <Route path='/' element={<Home
            setBodyId={setBodyId}
            pageTitle={pageTitle}
            setPageTitle={setPageTitle}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber} 
            isNextDisabled={isNextDisabled}
            isPrevDisabled={isPrevDisabled}
            setIsNextDisabled={setIsNextDisabled}
            setIsPrevDisabled={setIsPrevDisabled}  
            />}></Route>
        
          
            <Route path='/figma' element={<Figma 
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber} 
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}>

            </Route>
            <Route path='/microsoft' element={<Microsoft 
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}>
            </Route>
            
            <Route path='/youtube' element={<Youtube
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber} 
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled} 
              />}>
            </Route>

            <Route path='/reactlogo' element={<ReactLogo
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}>
            </Route>
            <Route path='/google' element={<Google
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>
            <Route path='/mcdonalds' element={<Mcdonalds
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>
            <Route path='/git' element={<Git
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>
            <Route path='/switch' element={<Switch
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>
            <Route path='/android' element={<Android
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}      
              />}>
              </Route>
            <Route path='/adidas' element={<Adidas
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle} 
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>


            <Route path='/circles' element={<Flowers 
              setBodyId={setBodyId}
              pageTitle={pageTitle}
              setPageTitle={setPageTitle}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              isNextDisabled={isNextDisabled}
              isPrevDisabled={isPrevDisabled}
              setIsNextDisabled={setIsNextDisabled}
              setIsPrevDisabled={setIsPrevDisabled}  
              />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
