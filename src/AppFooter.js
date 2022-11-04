import React, { Component, Fragment } from 'react';
import './AppFooter.css';

export default class AppFooter extends Component {
  render() {
    return (
      <Fragment>
        <hr />
        <p className="footer">Copyright &copy; 2022 Roni Andarsyah Ltd.</p>
      </Fragment>
    );
  }
}
