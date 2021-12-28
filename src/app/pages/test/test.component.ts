import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  dummyDataList: any[] = [
    {_id: '1', name: 'Md Sazib', age: 23},
    {_id: '2', name: 'Md Rakib', age: 25},
    {_id: '3', name: 'Md Sohan', age: 26},
    {_id: '4', name: 'Md Sobur', age: 28},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
