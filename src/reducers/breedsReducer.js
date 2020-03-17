import _ from 'lodash';
import {
  FETCH_BREEDS,
  FETCH_BREEDS_ERROR,
} from '../helpers/types';

import { getPieceOfState } from './utils/stateUtils';
import { BREEDS } from './utils/initialStates';

export default function (state = BREEDS, action) {
  const actions = {
    [FETCH_BREEDS]: () => getPieceOfState('breedsList', action, state),
    [FETCH_BREEDS_ERROR]: () => getPieceOfState('breedsListError', action, state),
  };

  const fn = _.get(actions, action.type);
  return (_.isFunction(fn) && fn()) || state;
}
