import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loadUser = createAction('[User] Load User', props<{ id: number }>());
export const loadUserSuccess = createAction('[User] Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction('[User] Load User Failure', props<{ error: any }>());
