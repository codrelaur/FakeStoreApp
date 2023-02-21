import React from 'react'
import { Link } from 'react-router-dom'

export default function Item(props) {
  const id= props.id;
  return (
    <div className='text-center itemsjsx'>
      <Link to={`/products/${id}`} className="links text-decoration-none">
        <img src={props.imageLink}
              width='200px'
              height='200px'
              />
            <p className='mt-3'>{props.title}</p>
      </Link>
    </div>
  )
}

