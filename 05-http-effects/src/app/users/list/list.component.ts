import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUsers } from 'src/app/store/actions';
import { map } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  private store = inject(Store<AppState>);

  userList$ = this.store.select('users').pipe( map( ({ users }) => users ) );
  loading$  = this.store.select('users').pipe( map( ({ loading }) => loading ) );
  error$    = this.store.select('users').pipe( map( ({ error }) => error ) );

  faTriangleExclamation = faTriangleExclamation;

  ngOnInit(): void {
    this.store.dispatch( loadUsers() )
  }

}
