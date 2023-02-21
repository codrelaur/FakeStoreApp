import React,{useState, useEffect} from 'react'
import Item from './Item'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [itemsArray,setItemsArray] = useState([]);
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(!localStorage.getItem('userToken')) {
            console.log(localStorage.getItem('userToken'))
            navigate('/login')
        } else {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setItemsArray((prev) => [...prev, ...json])
            })}
    },[]);

    function searchProducts(product) {
        if(input === '') return product;
        return product.title.toLowerCase().includes(input.toLocaleLowerCase())
    }

    const filterProducts = () => {
        fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>{ 
                setItemsArray(json)
            })
    }

    return (
    <div>
        <Navbar loading={false}/>
        <div name='search' className='container mx-5 mt-5'>
            <h1 className="display-1">Search</h1> 
            <p>Search through our store Catalogue here </p>
            <form>
            <div className="form-group col-xs-9">
                <input type="text" className="form-control"  placeholder="Search here.." value={input} onChange={e=> setInput(e.target.value)}/>
            </div>
            </form>
            <div className='col-xs-3 mb-5'>
                <button type="click" className="btn btn-dark mt-3" onClick={() =>searchProducts}>Search</button>
                <button type="click" className="btn btn-dark mt-3 mx-2" onClick={filterProducts}>Filter</button>
            </div>
            <div className='flex-gallery mx-5'>
                {itemsArray.filter(searchProducts).map((data,i) => 
                                <Item
                                    imageLink={data.image}
                                    title={data.title}
                                    key={i}
                                    id={data.id}
                                    />
                                    )}
            </div>
        </div>
    </div>
  )
}

export default Search