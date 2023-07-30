import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private store = inject(Store<AppState>);

  registerFormGroup: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  isLoading$ = this.store.select('ui');

  createUser() {
    if (this.registerFormGroup.invalid) { return; }

    const { nombre, correo, password } = this.registerFormGroup.value;
    this.authService.createUser(nombre, correo, password);
  }



}
