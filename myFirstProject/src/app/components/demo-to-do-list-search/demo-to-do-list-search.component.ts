import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-to-do-list-search',
  templateUrl: './demo-to-do-list-search.component.html',
  styleUrls: ['./demo-to-do-list-search.component.css']
})
export class DemoToDoListSearchComponent implements OnInit {
  public keyWord: string = '';
  public historyList: string[] = [];

  constructor() {}

  ngOnInit() {}

  public doSearch(): void {
    if (this.historyList.indexOf(this.keyWord) === -1) {
      this.historyList.push(this.keyWord);
    }
    this.keyWord = '';
  }

  public deleteHistroy(index: number): void {
    this.historyList.splice(index, 1);
  }
}
