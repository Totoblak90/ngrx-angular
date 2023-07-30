import { createAction, props } from '@ngrx/store';
import { Usuario } from '../models/user.model';

export const setUser = createAction('[Auth] SetUser', props<{ user: Usuario }>());
export const unsetUser = createAction('[Auth] UnsetUser');
