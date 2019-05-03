import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../Team'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
