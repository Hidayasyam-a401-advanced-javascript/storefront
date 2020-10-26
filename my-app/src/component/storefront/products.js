import React from 'react'
import { connect } from 'react-redux'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {AddCart} from '../store/cart'

const useStyles = makeStyles({
  root: {
    maxWidth: 140,
    max: 100
  },
  media: {
    height: 140,
    maxWdth: 100
  },
});
const Products = props => {
  const classes = useStyles();
  return (
    <section className="products">
      {props.products.displayedProducts.map(product => {
        return <Card>
             <h3> {product.name}</h3>
      <p>{product.description}</p> <span>{product.price}</span>
      <CardMedia
          className={classes.media}
          image="https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
          title="none"
        />
         <Button onClick={()=>props.AddCart(product.name)}>Add to Cart</Button>
        </Card>

       
      })}
    </section>
  )
}
const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = {AddCart}
export default connect(mapStateToProps,mapDispatchToProps)(Products);

//   {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
// //   <Card.Body>
// //   <Card.Title> {product.name}</Card.Title>
// //   <Card.Text>
// //       {product.description}
// //   </Card.Text>
// // </Card.Body>
// // <Card.Body>
// //   <Card.Link href="#">Card Link</Card.Link>
// //   <Card.Link href="#">Another Link</Card.Link>
// // </Card.Body>
// // </Card>;