import React from 'react'
import {connect} from 'react-redux'
import {Active} from '../store/categories.js'
const Categories = props => {
  return (
      <section className="category">
        {console.log('Props:', props)}
        <h3>Browse our Categories </h3><br/>
          <p>{props.category.activeCategory.displayName}</p>
      </section>
    )
}
const mapStateToProps = state => ({
  category: state.categories,
})
const mapDispatchToProps = {Active}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);