import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  constructor() { }

  profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  });

  ngOnInit(): void {
  }

}
