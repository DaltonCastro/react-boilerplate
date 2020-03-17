import React, { Component } from 'react';
import  { connect } from 'react-redux';
import * as actions from '../../../actions/breedsActions';

@connect(({ breeds }) => ({ breeds }), actions)
class BreedItem extends Component {
  render() {
    const {
      name, origin
    } = this.props;

    return (
      <div className='breed-item'>
        <p>{name}</p>
        <p>{origin}</p>
      </div>
    );
  }
}

export default BreedItem;
