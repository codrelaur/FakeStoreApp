import React, {useState, useEffect} from 'react'
import Item from './Item'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const history = useNavigate()
    const [item, setItem] = useState({});
    const [itemsArray,setItemsArray] = useState([]);
    const {id}  = useParams();
    
    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                setItem(json)
              })
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>{ 
                setItemsArray([...json])
            })
            
    }, [id])
   
      const clickHandler = () => {
        alert('Sorry mate, not enough money in your bank account...')
      }

  return (
    <div>
        <Navbar loading={false}/>
        <div className='container mt-5'>
            <div className='col-sm-12'>
                <button type="button" className="btn btn-dark mt-3 mb-5" onClick={() => history(-1)}>Back</button>
            </div>
            <div className="container row justify-content-between">
                <div className="col-sm-3">
                <img src={item.image}
                        width='300px'/>
                </div>
                <div className='col-sm-8'>
                    <h3 className='mb-4'>{item.title}</h3>
                    <h3 className='mb-4'>${item.price}</h3>
                    <p className='mb-4'>{item.description}</p>
                    <p className='mb-4'>{`Rating: ${item.rating && item.rating.rate}`}</p>
                    <button type="button" className="btn btn-primary mt-3 mb-5" onClick={clickHandler}>Buy Now</button>
                </div>
            </div>
            
            <h2 className='mt-5'>Related Products</h2>
            <div className="flex-gallery mt-5">
             {itemsArray.map((data,i) => 
                                <Item
                                    imageLink={data.image}
                                    title={data.title}
                                    key={i}
                                    id={data.id}/>
                            )}
            </div>
        </div>
    </div>
  )
}

export default ProductDetails