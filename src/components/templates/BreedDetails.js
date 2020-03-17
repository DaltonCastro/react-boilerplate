import React, { Component, Fragment } from 'react';
import  { connect } from 'react-redux';
import * as actions from '../../actions/breedsActions';

@connect(({ breeds }) => ({ breeds }), actions)
class BreedDetails extends Component {
  render() {
    const { name, } = this.props;
    return (
      <Fragment>
        <div>Detail</div>
        <h3>{ name }</h3>
      </Fragment>
    );
  }
}

export default BreedDetails;
