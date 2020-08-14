import React from 'react'
import {Link} from 'react-router-dom';


 const Landing = () => {
   
    return (
        <div>
        <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome to JobChat app</h1>
          <p className="lead">
            A job chat app provides you different types of jobs Login or sign up to take the benefits of the app
          </p>
          <div className="buttons">
            <Link to="/Register" className="btn btn-primary">Sign Up</Link>
            <Link to="/Login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>    
        </div>
    )
}



export default Landing