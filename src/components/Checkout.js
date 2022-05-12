import React from 'react'
import { useSelector} from 'react-redux'
import Card from 'react-bootstrap/Card'

const Checkout = () => {

    const cart = useSelector(state => state.add.cart)
    console.log(cart)


    return (
        <>
            Checkout

            
                {/* <li>{cart.map(element => {
                    return <img src={element.url} alt="" width="286px" />
                    // <p>{element.price}</p>
                })}</li> */}
                    {
                        cart.map(element => {
                            return (
                            <><br /><Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={element.url} />
                                <Card.Body>
                                    <Card.Title>Price: </Card.Title>
                                    <Card.Text>
                                    ${element.price}
                                    </Card.Text>
                                    
                                </Card.Body>
                                </Card></>)
                                
                        })
                    }
        </>
    )
}

export default Checkout