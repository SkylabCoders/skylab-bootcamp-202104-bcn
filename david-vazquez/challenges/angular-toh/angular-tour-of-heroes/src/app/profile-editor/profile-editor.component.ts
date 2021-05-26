import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnChanges{
  @Input() hero!: Hero;

  profileForm = this.formBuilder.group({
    _id: '',
    name: ['', [Validators.maxLength(15), Validators.minLength(2)]],
    biography: this.formBuilder.group ({
      aliases: this.formBuilder.array([])
    })
})
  constructor( private formBuilder: FormBuilder, private heroService: HeroService) { }

  ngOnChanges(): void {
    this.hero.biography.aliases.forEach((alias)=>this.addAlias());
    this.profileForm.patchValue(this.hero);
  }

  get name() {
    return this.profileForm.get('name')
  }

  get id() {
    return this.profileForm.get('_id')
  }

  get aliases(){
    return this.profileForm?.get('biography')?.get('aliases') as FormArray
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  updateProfile() {
    this.profileForm.patchValue({
      name: this.hero.name,
      id: this.hero.id,
    });
  }

  save(value: Hero): void {
    if (value) {
      this.heroService.updateHero(value).subscribe();
    }
  }
}
