import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const App = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {

    e.preventDefault()

    navigate('/deposit')

  }

  return (
    <>
      App

      <br />
      Welcome! In this app, you will be able to deposit from $1 to $500 to purchase gifs.
      <br />
      $1 = more difficult to purchase gifs.
      <br />
      $500 = easier to purchase gifs.
      <br /> 
      Click to deposit money: 
      <br />
      <Button onClick={handleClick} >
        Continue
      </Button>
    </>
  )
}

export default App