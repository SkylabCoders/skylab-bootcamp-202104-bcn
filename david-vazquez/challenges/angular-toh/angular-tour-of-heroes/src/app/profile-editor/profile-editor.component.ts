import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    id: ['', Validators.required],
    name: ['', [Validators.maxLength(15), Validators.minLength(2)]]
})
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  get name() {
    return this.profileForm.get('name')
  }
  get id() {
    return this.profileForm.get('id')
  }
}
