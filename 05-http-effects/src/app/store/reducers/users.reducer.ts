import { User } from 'src/app/models/user.model'
import * as actions from '../actions'
import { createReducer, on } from '@ngrx/store'

export interface UsersState {
  users: User[],
  loaded: boolean,
  loading: boolean,
  error: any
}

export const usersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

export const usersReducer = createReducer(

  usersInitialState,

  on(actions.loadUsers, state => ({ ...state, loading: true })),

  on(actions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users]
  })),

  on(actions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: error.url,
      name: error.name,
      message: error.message
    },

  }))

)
