import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  /****** slide-menu  ******/
  slideMenu = false;

  slideMenuOpen(){

    this.slideMenu = true;

  }
  slideMenuClose(){

    this.slideMenu = false;

  }

  constructor() { }

  ngOnInit(): void {
  }
}
