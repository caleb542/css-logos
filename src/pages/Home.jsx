import {Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
    return (
      <div className="home">
        <div className="container">
          <div className="gradient">
              <h1>
              CSS Logos
              </h1>
              <p>
                Logos created with CSS & CSS animations
              </p>
              <div>
              <button className='btn' onClick={() => navigate('/figma')}>Start</button>
              </div>
      
          </div>
           
        </div>
         
      </div>
    )
  }
  
  export default Home
  