import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = this.formBuilder.group({
    id: null,
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]]
  })
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  get name() {
    return this.profileForm.get('name')
  }

  get id() {
    return this.profileForm.get('id')
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }
  save(value: any) {
    console.log(value);
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}
