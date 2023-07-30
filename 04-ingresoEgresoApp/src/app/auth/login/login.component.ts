import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private store = inject(Store<AppState>);

  loginForm = this.fb.group({
    email: [ '', [Validators.required, Validators.email] ],
    password: [ '', [Validators.required, Validators.minLength(6)] ]
  });

  isLoading$ = this.store.select('ui');

  async login() {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    await this.authService.loginUser(email!, password!);

  }
}
