import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  private router = inject(Router)
  private store = inject(Store<AppState>)

  user$ = this.store.select('user').pipe(map(user => user.user));

  findUser(inputValue: string | null) {
    if (!inputValue) { return; }

    this.router.navigate(['/user', inputValue]);
  }

}
