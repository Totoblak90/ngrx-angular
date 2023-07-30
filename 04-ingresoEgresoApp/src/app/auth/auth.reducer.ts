
import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../models/user.model';
import { setUser, unsetUser } from './auth.actions';

export interface State {
    user: Usuario | null;
}

export const initialState: State = {
   user: null,
}

export const authReducer = createReducer(initialState,

  on( setUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on( unsetUser, state => ({ ...state, user: null }) )
  
);
