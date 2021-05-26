import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  profileForm = this.fb.group({
    id: null,
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
    powerstats: this.fb.group({
      intelligence: [''],
      strength: [''],
      speed: [''],
      durability: [''],
      power: [''],
      combat: [''],
    }),
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Cristian',
      address: {
        street: 'Casa meva'
      }
    });
  }
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  
  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
