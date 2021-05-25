import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  name = new FormControl('');

  @Input() heroName!: string;
  @Output() heroNameChange = new EventEmitter();

  constructor() { }

  // updateName() {
  //   this.name.setValue('Nancy');
  // }
  
  nameChange(event: any) {
    this.heroNameChange.emit(event.target.value);
  }

  ngOnInit(): void {
  }

}
