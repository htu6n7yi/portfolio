import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuHidden: boolean = true;


  toggleMenu():void {
    this.isMenuHidden = !this.isMenuHidden;
  }

}

