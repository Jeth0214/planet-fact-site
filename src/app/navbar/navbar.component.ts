import { Component, Input} from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() planets: Planet[] = [];
  isOpen: boolean = false

  constructor( ) { 
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  hideToggle(){
    this.isOpen = false;
  }
}
