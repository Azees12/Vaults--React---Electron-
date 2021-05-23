import React, { Suspense } from 'react'
import { Redirect } from 'react-router'

import useStore from '../../store/userStore'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Intial = React.lazy(() => import('../../pages/intial')) ;
const PostLogin = React.lazy(() => import('../../pages/PostLogin')) ;

const Routing = () => {

  const token = useStore(state => state.token )

    return (
        <Router>
        <Suspense>
            
          <Switch>
         <Route exact path="/" >
             {token != "" ? <Redirect to="/MyVaults"/> : <Intial/>} 
        </Route>
        
        <Route exact path="/MyVaults" component={PostLogin}>
        </Route>
            </Switch>
        </Suspense>     
        </Router>

    )
}


export default Routing