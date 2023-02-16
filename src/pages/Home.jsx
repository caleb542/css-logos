import {Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
    return (
      <div className="home">
        <div className="container">
          <div className="gradient">
              <h1>
              Home
              </h1>
              <p>
                Some well known corporate logos in made with CSS & HTML
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
  