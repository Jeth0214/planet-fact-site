import { Component, ElementRef, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from '../planet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() planets: Planet[] = [];
  isOpen: boolean = false

  constructor( private router: Router ) { 
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  hideToggle(){
    this.isOpen = false;
  }
}
