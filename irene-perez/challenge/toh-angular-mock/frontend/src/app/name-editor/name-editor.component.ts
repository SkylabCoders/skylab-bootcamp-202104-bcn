import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
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
