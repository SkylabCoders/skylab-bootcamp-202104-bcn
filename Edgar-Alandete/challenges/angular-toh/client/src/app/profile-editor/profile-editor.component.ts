import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    id: null,
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get name() {
    return this.profileForm.get('name');
  }

  get id() {
    return this.profileForm.get('id');
  }

}
