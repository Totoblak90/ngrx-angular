import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersFailure, loadUsersSuccess } from '../actions';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);
  private usersService = inject(UserService);

  loadUsers$ = createEffect(
    () => this.actions$
    .pipe(

      ofType(loadUsers),
      mergeMap(
        () => this.usersService.getUserList()
                  .pipe(
                    map( (users) => loadUsersSuccess({ users }) ),
                    catchError( (error) => of( loadUsersFailure({ error }) )  ),
                  )
      )

    )
  );
}
