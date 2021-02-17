import { formatCurrency } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  showForm = false;
  constructor() {}

  ngOnInit(): void {}

  submitPost = (form: NgForm) => {
    let newPost: Post = {
      title: form.form.value.title,
      thought: form.form.value.thought,
    };
    this.submitted.emit(newPost);
  };
}
