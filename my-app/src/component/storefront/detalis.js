import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { AddCart } from '../store/cart'
import { ViewAction } from '../store/detalis'
function Details(props) {
    console.log('detalis : ', props.detalis.payload)
    return (
        <>
            <Card>
                <Card.Header>{props.detalis.payload.name}</Card.Header>
                <Card.Img></Card.Img>
                <Card.Body></Card.Body>
            </Card>
        </>
    )

}

const mapStateToProps = state => ({
    detalis: state.detalis
})

const mapDispatchToProps = { AddCart, ViewAction }
export default connect(mapStateToProps, mapDispatchToProps)(Details);
