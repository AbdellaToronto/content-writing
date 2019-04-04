import {combineReducers} from 'redux';
import {reducer as persist, PersistState} from './persist';
import {reducer as system, SystemState} from './system';
import { reducer as formReducer } from 'redux-form';

export const reducer = combineReducers<RootState>({
  // persist,
  // system,
  form: formReducer
});

export interface RootState {
  // persist: PersistState,
  // system: SystemState,
  form: any
}
