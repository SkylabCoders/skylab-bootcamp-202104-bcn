import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  @Input() heroName!: string;
  @Output() heroNameChange = new EventEmitter();
  name = new FormControl('')
  
  constructor() { }

  ngOnInit(): void {
  }
  
  nameChange(event: any) {
    this.heroNameChange.emit(event.target.value);
  }
  
}
