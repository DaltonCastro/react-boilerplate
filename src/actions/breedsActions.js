import _ from 'lodash';
import Axios from 'axios';
import * as Types from '../helpers/types';

export const fetchBreeds = () => async (dispatch) => {
  Axios.get('https://api.thecatapi.com/v1/breeds')
    .then(({ data }) => {
      dispatch({
        type: Types.FETCH_BREEDS,
        payload: _.orderBy(data, ['name'], ['asc'])
      });
    })
    .catch((e) => {
      dispatch({ type: Types.FETCH_BREEDS_ERROR, payload: e });
    });
};
