import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { loadUser, loadUserFailure, loadUserSuccess } from "../actions";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class UserEffects {

  private action$ = inject(Actions);
  private userService = inject(UserService);

  loadUser$ = createEffect(

    () => this.action$.pipe(

      ofType(loadUser),
      switchMap(
        (action) => this.userService.getUser(action.id).pipe(
                    map( (user) => loadUserSuccess({ user }) ),
                    catchError( (error) => of( loadUserFailure({ error }) )  ),
                  )
      )

    )

  )


}
