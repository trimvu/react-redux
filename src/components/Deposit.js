// import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Deposit = () => {

//   const navigate = useNavigate();

//   const [dollars, setDollars] = useState(0)

//   const handleSubmit = (e) => {

//     e.preventDefault()

//     // let amount = {
//     //   dollars
//     // }

//     navigate('/buy')

//   }
  
//   return (
//     <>
//       <Form onSubmit={handleSubmit}>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Deposit</Form.Label>
//           <Form.Control type="number" min="1" max="500" placeholder="Enter amount: " value={dollars} 
//           onChange={e=> setDollars(e.target.value)}/>
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Deposit ${dollars}
//       </Button>

//       </Form>

//     </>
//   )
// }

// export default Deposit


import React, { useState } from 'react'
// import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import moneyAction from '../actions/moneyAction';

const Deposit = () => {

  const navigate = useNavigate();

  const [dollars, setDollars] = useState(0)

  const dispatch = useDispatch();
  const dollarsGlobal = useSelector(state => state.money.dollarsGlobal)
  console.log(dollarsGlobal) 

  const handleSubmit = (e) => {

    e.preventDefault()

    // let amount = {
    //   dollars
    // }

    dispatch(moneyAction(parseInt(dollars)))

    navigate('/buy')

  }
  
  return (
    <>
      <h1>${dollarsGlobal}</h1>
      <h1>${dollars}</h1>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Deposit</Form.Label>
          <Form.Control type="number" min="1" max="500" placeholder="Enter amount: " value={dollars} 
          // {/* <Form.Control type="number" min="1" max="500" placeholder="Enter amount: "   */}
          onChange={e=> setDollars(e.target.value)}/>
          {/* onChange={()=> dispatch(moneyAction(dollars))}/> */}
          {/* onChange={e=> dispatch(moneyAction(e.target.value))}/> */}
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Deposit ${dollars}
      </Button>

      </Form>

    </>
  )
}

export default Deposit