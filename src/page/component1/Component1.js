/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


import { RouteComponentProps , BrowserRouter as Router, Route, Link, Switch, useParams, useHistory, useLocation } from 'react-router-dom'

import C1 from './component/C1'
import C2 from './component/C2'

export default function(props){
  const [state, setState] = useState()
  const { match: { path, url } } = props;
  console.log('props', props);
  useEffect(() => {

  }, [])

  console.log(useParams(), 'useParams', useHistory(), 'useHistory', useLocation(), 'useLocation');

  return (
    <div>
      component1
      <Router>
      <ul>
        <li>
          <Link to={`${useLocation().pathname}/C1`}>C1</Link>
        </li>
        <li>
          <Link to={{pathname: "/C2", state: {name: 'component2name'}}}>C2</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${url}/C1`} component={C1} />
        <Route path='/C2' component={C2} />
      </Switch>
      </Router>
    </div>
  )
}