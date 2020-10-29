import React from 'react';
// import superagent from 'superagent';
import Product from '../storefront/products';
import Categories from '../storefront/categories';
import { Route, Switch } from 'react-router-dom';
import Detalis from '../storefront/detalis'
import Cart from '../storefront/cart'

//import List from './list';
//import HomePage from './home-page.js'

function Main(props) {

    // let items = this.state.items.map((item, i)=> <li key={i} >{item.name}</li>)

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Categories />
                    <Product />
                </Route>
                <Route exact path="/product">
                    <Detalis />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                {/* <Route exact path="/list">
                        <List check="hi">
                            {items}
                        </List>
                    </Route>
                    <Route exact path="/list/ahmad">
                        <div>This is /list/ahmad</div>
                    </Route>
                    <Route exact path="/list/ahmad/2">
                        <div>This is /list/ahmad/2 page </div>
                    </Route>
                    <Route exact path="/test">
                       <div>this is test route!</div>
                    </Route>
                    <Route exact path="/render-things" render={()=> <div>self closing Route</div>} />
                    <Route>404 Page Not Found!</Route> */}
            </Switch>
        </main>
    )
}
// eslint-disable-next-line no-lone-blocks
{/* <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
} */}
// 
// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }


export default Main;