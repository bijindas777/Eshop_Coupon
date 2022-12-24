import React from 'react'
import Products from "./Products"

function Home() {
  return (
    <div className='hero row'>
        <div className="card bg-dark text-white border-0 col-sm-6 col-md-6 col-lg-12">
  <img src="/assets/bg.jpg" className="card-img" alt="background" height="550px" />
  <div className="card-img-overlay d-flex flex-column 
  justify-content-center mb-5">
    <div className="container">
    <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
    <p className="card-text lead fs-2">
        CHECK  OUT ALL THE TRENDS
     </p>

    </div>
  </div>
</div>
<div className='flex-container'>

    <Products />  
</div>
    </div>
  )
}

export default Home
