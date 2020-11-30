import { Component, Input, OnInit } from '@angular/core';
import { MenuDropdown } from 'src/app/interfaces/menuDropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() title: string;
  @Input() menuDropdown: MenuDropdown[];
  constructor() { }

  ngOnInit() { }

}
