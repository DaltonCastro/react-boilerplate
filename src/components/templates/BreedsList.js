import React, { Component, Fragment } from 'react';
import  { connect } from 'react-redux';
import * as actions from '../../actions/breedsActions';

import noAvatar from '../../assets/images/no_avatar.jpg';
import BreedItem from './fragments/BreedItem';

@connect(({ breeds }) => ({ breeds }), actions)
class BreedsList extends Component {
  componentDidMount() {
    this.props.fetchBreeds();
  }

  renderBreeds = () => {
    const { breeds: { breedsList } } = this.props;

    return breedsList.map((item) => (
      <BreedItem key={item.id} {...item} />
    ));
  };

  render() {
    return (
      <div className='flex-1 mx-auto h-screen'>
        <div className='flex flex-col bg-gray-200'>
          <div className='text-gray-700 text-center bg-gray-400 px-4 py-2 m-2'>1</div>
          <div className='flex flex-row h-auto mb-10'>
            <div className='w-1/4 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2'>2</div>
            <div className='flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2'>3</div>
          </div>
        </div>
      </div>

    // <div style={styles.container}>
    //   <h3>Breeds List</h3>
    //   <div>
    //     {/*{ this.renderBreeds() }*/}
    //   </div>
    // </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: 500
  }
};

export default BreedsList;
