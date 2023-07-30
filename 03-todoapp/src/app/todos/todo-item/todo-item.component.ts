import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { deleteTodo, editTodo, toggleTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo | null;
  @ViewChild('txtInputRef') txtInputRef?: ElementRef<HTMLInputElement>;

  chkCompleted!: FormControl;
  txtInput!: FormControl;

  isEditing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkCompleted = new FormControl(this.todo!.completed);
    this.txtInput = new FormControl(this.todo!.text, [Validators.required]);

    this.chkCompleted.valueChanges.subscribe((value) => {
      this.store.dispatch(toggleTodo({ id: this.todo!.id }));
    });
  }

  startEdition() {
    this.isEditing = true;
    this.txtInput.setValue(this.todo!.text);
    setTimeout(() => this.txtInputRef?.nativeElement.select());
  }

  finishEdition() {
    this.isEditing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo!.text) return;

    this.store.dispatch(
      editTodo({ id: this.todo!.id, text: this.txtInput.value })
    );
  }

  deleteTodo() { this.store.dispatch(deleteTodo( { id: this.todo!.id } )) }

}
