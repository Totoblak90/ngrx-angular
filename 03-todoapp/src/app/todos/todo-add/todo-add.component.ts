import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { createTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {

  txtInput!: FormControl;

  constructor(private store: Store<AppState>) { this.createFormControl() }

  createFormControl() { this.txtInput = new FormControl('', [Validators.required]); }

  addTodo() {
    if (this.txtInput.invalid) {  return; }

    this.store.dispatch(createTodo({text: this.txtInput.value}));

    this.txtInput.reset();
  }
}
