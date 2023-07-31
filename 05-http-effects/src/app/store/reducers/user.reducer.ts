import { User } from 'src/app/models/user.model';
import * as actions from '../actions';
import { createReducer, on } from '@ngrx/store';

export interface UserState {
  user: User | Object;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const userInitialState: UserState = {
  user: {},
  loaded: false,
  loading: false,
  error: null,
};

export const userReducer = createReducer(

  userInitialState,

  on(actions.loadUser, (state) => ({ ...state, loading: true })),

  on(actions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
    error: null
  })),

  on(actions.loadUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: error.url,
      name: error.name,
      message: error.message,
    },
    user: {}
  }))

);
