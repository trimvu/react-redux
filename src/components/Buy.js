import React, { useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import addAction from '../actions/addAction';
// import {key} from '../secret/key'

const Buy = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const dollarsGlobal = useSelector(state => state.money.dollarsGlobal) 
  const cart = useSelector(state => state.add.cart)
  // console.log(cart)

  const [gif, setGif] = useState([]);
  
  const fetchGif = async () => {
    let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=Z4c9jyzQYw8Xvs5xQ9WYeCTo7dhWXKc7&tag=&rating=r`)
    let data = await response.json();

    // console.log(data.data)

    setGif(data.data);
  }

  useEffect( () => {

    fetchGif()

  }, [])

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // console.log(gif)

  const price = getRandomInt(100)

  const handleAdd = () => {

    fetchGif()
    
    dispatch(addAction(gif.images.original.url, price))

  }

  return (
    <>
      Buy

      <h1>${dollarsGlobal}</h1>

      <div>
        <br />
        <h1>{gif.title}</h1>
        <br />
        {
          gif.images === undefined 
          ? 
          '' 
          : 
          <img src={gif.images.original.url} alt="" />
        }

{/* 
[
  {
    gif: url,
    price: price
  }
  {
    gif: url,
    price: price
  }
  {
    gif: url,
    price: price
  },
]
*/}
        <p>${price}</p>
      </div>
      {/* <br />
      <img src={gif.images.original.url} height="300px" alt="" /> <br />
      <div>{gif.title}</div>*/}
      <button onClick={() => fetchGif()}>Next</button> 
      <button onClick={() => handleAdd()}>Add</button> 
      <button onClick={() => navigate('/checkout')}>Checkout</button> 
    </>
  )
}

export default Buy