import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.css']
})
export class SearchTaskComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeSearch(textbox): void {
    this.search.emit(textbox.value);
  }

}
