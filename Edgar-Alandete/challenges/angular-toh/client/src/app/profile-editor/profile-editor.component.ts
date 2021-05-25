import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  @Input() hero!: Hero;

  profileForm = this.formBuilder.group({
    id: null,
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
    aliases: this.formBuilder.array([
      new FormControl('La muralla'),
      new FormControl('The wall'),
    ])
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

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }

  addAlias() {

  }

}
