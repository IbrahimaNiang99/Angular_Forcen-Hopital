import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateDujour:string;
  heureDuJour:string;
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      this.heureDuJour = now.toLocaleTimeString();
    }, 1000);
    console.log(this.dateDujour= format(new Date(), "EEEE, d MMMM yyyy"))
  }

}
