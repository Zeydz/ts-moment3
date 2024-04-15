import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.addEventListeners();
  }

  addEventListeners() {
    // Hämta in meny-knapparna
    let openBtn = document.getElementById("open-menu") as HTMLButtonElement;
    let closeBtn = document.getElementById("close-menu") as HTMLButtonElement;

    // Eventlyssnare
    openBtn.addEventListener('click', this.toggleMenu);
    closeBtn.addEventListener('click', this.toggleMenu);
  }

  toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu") as HTMLElement;

    // Hämtar in css för menyn
    let style = window.getComputedStyle(navMenuEl);

    // Koll om navigering är synlig eller ej, ändrar display block/none
    if (style.display === "none") {
      navMenuEl.style.display = "block";
    } else {
      navMenuEl.style.display = "none";
    }
  }

}
