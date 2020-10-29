/* eslint-disable no-lone-blocks */
import React from 'react'
import { connect } from 'react-redux'
import { Delete } from '../store/cart'
import { Button, Card, Form, Table } from 'react-bootstrap'

const Cart = props => {
    console.log('Cart props ----> ', props.basket)
    let total = 0;
    return (
        <>

            <div>
                {

                    <Card>
                        <h1>Order Summary : </h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan="2"> Product </th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.basket.length !== 0 && (
                                    Object.values(props.basket).map(product => {
                                        total = total + product.price;
                                        return <tr>
                                            <td colSpan="2">{product.name}</td>
                                            <td colSpan="2">{product.price}</td>

                                        </tr>
                                    }))}
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td colSpan="2">{Math.abs(total)}</td>

                                </tr>
                            </tbody>

                        </Table>
                    </Card>


                }
            </div>
            <div>
                <Card>
                    <Card.Header>Billing Information</Card.Header>
                    <Form>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label style={{marginLeft:'100px'}} >Credit Card</Form.Label>
                                <Form.Control style={{marginLeft:'100px'}} type="Number"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label style={{marginLeft:'100px'}} >Exp Data</Form.Label>
                                <Form.Control style={{marginLeft:'100px' ,placeContent:'yy - mm -yy'}} type="date"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label style={{marginLeft:'100px'}} >CCV</Form.Label>
                                <Form.Control style={{marginLeft:'100px'}} type="Number"  />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row style={{margin:'5px'}}> 
                            <Form.Group>
                                <Form.Label>State</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                          
                        </Form.Row>

                        <Button  style={{marginLeft:'250px'}} variant="primary" > PLACE YOUR ORDER</Button>
                        </Form>
                </Card>
            </div>

        </>
    )


};



const mapStateToProps = state => ({
                basket: state.cart.basket,
})

const mapDispatchToProps = { Delete}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

