import React from 'react'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div className='mx-auto mt-5'>        
        <Navbar loading={true}/> 
    <div className="container">
     <h1 className="display-1">Welcome</h1> 
   <p>To the React Web Starter App</p>
    <img src='https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg?w=740&t=st=1676795269~exp=1676795869~hmac=e066ab34a0e0b34d350289e1378c0a96b2a6e13d475bff98a547d45bd9717a11' 
          />
      <img src='https://img.freepik.com/free-photo/landmarks-modern-city_1359-338.jpg?w=740&t=st=1676795269~exp=1676795869~hmac=e066ab34a0e0b34d350289e1378c0a96b2a6e13d475bff98a547d45bd9717a11' 
           className="picture1 mb-5"/>
     </div>
</div>
  )
}

export default Homepage