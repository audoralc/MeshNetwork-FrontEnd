/*
 *
 * SpaceSignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import './style.css';
import './styleM.css';

export default class SpaceSignIn extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="SpaceSignIn" meta={[ { name: 'description', content: 'Description of SpaceSignIn' }]}/>

        //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

SpaceSignIn.contextTypes = {
  router: PropTypes.object
};