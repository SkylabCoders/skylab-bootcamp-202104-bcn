import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
  
export class ProfileEditorComponent {

  @Input() hero!: Hero;

      profileForm = this.fb.group({
    id: ['',Validators.required],
    name: [''],
    address: this.fb.group({
      gender: [''],
      race: [''],
      height: [''],
      weight: [''],
      eyeColor: [''],
      hairColor: ['']
    }),

  aliases: this.fb.array([
    this.fb.control('')
  ])
    });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService
  ) { }

  

 
  
  
  get aliases() {
  return this.profileForm.get('aliases') as FormArray;
  }
  addAlias() {
  this.aliases.push(this.fb.control(''));
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

}