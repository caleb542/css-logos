import {Link, useNavigate} from 'react-router-dom'


function Home() {
  const navigate = useNavigate();
    return (
      <div className="home">
        <div className="container">
          <div className="gradient">
        
              
              <div className="logo">
                <div className="logo-container">
                  <div className="ch">
                  <h2>CSS LOGOS</h2>
                  </div>
                  <div className="border border-top"></div>
                  <div className="border border-right"></div>
                  <div className="border border-bottom"></div>
                  <div className="border border-left"></div>
                </div>
              </div>
              <div>
              <button className='btn' onClick={() => navigate('/figma')}>Start</button>
              </div>
      
          </div>
           
        </div>
         
      </div>
    )
  }
  
  export default Home
  