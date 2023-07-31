import { Component, Input, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {
  @Input() id!: string;

  private store = inject(Store<AppState>);

  user$ = this.store.select('user').pipe( map( ({ user }) => user ) );
  loading$ = this.store.select('user').pipe( map( ({ loading }) => loading ) );
  error$ = this.store.select('user').pipe( map( ({ error }) => error ) );

  faTriangleExclamation = faTriangleExclamation;

  ngOnChanges(simpleChange: SimpleChanges) {
    this.store.dispatch( loadUser({ id: +this.id }) )
  }

}
