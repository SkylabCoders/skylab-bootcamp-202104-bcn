import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  @Input() hero!: Hero;

  profileForm = this.formBuilder.group({
    _id: null,
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
    aliases: this.formBuilder.array([]),
  })
  constructor(private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.profileForm.get('name');
  }

  get id() {
    return this.profileForm.get('_id');
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }


  updateProfile() {
    this.profileForm.patchValue({
      name: 'Super Isabel',
    });
  }

  addAlias() {

  }

  save(value: any): void {
    if(value) {
      console.log(value);
      debugger;
      this.heroService.updateHero(value).subscribe();
    }
  }

}
