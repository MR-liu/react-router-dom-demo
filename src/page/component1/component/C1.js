import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, useHistory, useLocation } from 'react-router-dom'
export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])
  
  console.log('c1-------------------')
  console.log(useParams(), 'useParams', useHistory(), 'useHistory', useLocation(), 'useLocation');

  return (
    <div>
      C1
    </div>
  )
}