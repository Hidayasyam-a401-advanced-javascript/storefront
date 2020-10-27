import React from 'react'
import { connect } from 'react-redux'
import {Delete} from '../store/cart'

const Cart = props => {
    console.log('Cart props ----> ', props.basket)

    return (
        <>
        <h1>Cart : </h1>
            <div>
                {

                    props.basket.length !== 0 &&(
                        props.basket.map(product => {
                            return <li>{product} <button style={{backgroundColor:"red"}} onClick={()=>props.Delete(product.name)} >remove</button></li>
                        })

                    )
                    
                    

                        
                }
            </div>

        </>
    )


};






const mapStateToProps = state => ({
    basket: state.cart.basket,
})

const mapDispatchToProps ={Delete}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);
