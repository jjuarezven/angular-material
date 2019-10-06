import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Owner } from './../../../_interface/owner.model';

@Component({
  selector: 'app-owner-data',
  templateUrl: './owner-data.component.html',
  styleUrls: ['./owner-data.component.css']
})
export class OwnerDataComponent implements OnInit {
  @Input() public owner: Owner;
  @Output() selectEmitt = new EventEmitter();
  public selectOptions = [{name: 'Show', value: 'show'}, {name: `Don't Show`, value: ''}];

  constructor() { }

  ngOnInit() {
  }

  public onChange = (event) => {
    this.selectEmitt.emit(event.value);
  }

}
