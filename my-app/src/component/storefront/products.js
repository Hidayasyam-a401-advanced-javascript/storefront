import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AddCart } from '../store/cart'
import { getProducts } from '../store/products'
import { ViewAction } from '../store/detalis'
import { Link, NavLink } from 'react-router-dom';
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
  //const [list]
  useEffect(() => {
    props.getProducts();
  }, [])
  return (
    <section className="products">
      {console.log('props------> ', props.products.products)}
      {props.products.displayedProducts.map(product => {
        return <Card>
          <h3> {product.name}</h3>
          {/* <p>{product.description}</p>*/} <span>{product.price}</span>
          <CardMedia
            className={classes.media}
            image="https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
            title="none"
          />
          <Button style={{ backgroundColor: "green" }} onClick={() => props.AddCart(product)}>Add to Cart</Button>
          <Button onClick={() => props.ViewAction(product)} ><Link style={{ textDecoration: "none", color: 'black' }} to={`/product`} activeClassName="list-class">Product Details</Link></Button>
        </Card>


      })}
    </section>
  )
}
const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = { AddCart, getProducts, ViewAction }
export default connect(mapStateToProps, mapDispatchToProps)(Products);

