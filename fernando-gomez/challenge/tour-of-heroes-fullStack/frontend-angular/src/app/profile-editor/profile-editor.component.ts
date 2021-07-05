import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    name: [null, [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
    powerstats: this.formBuilder.group({
      intelligence: null,
      strength: null,
      speed: null,
      power: null,
    }),
    appereance: this.formBuilder.group({
      gender: null,
      eyecolor: null,
    }),
    work: this.formBuilder.group({
      ocupation: null,
    }),
    aliases: this.formBuilder.array([
      new FormControl('La muralla'),
      new FormControl('The wall'),
    ])
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