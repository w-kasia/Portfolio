import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  // @HostListener('window:scroll', ['$event'])

  // onWindowScroll() {
  //   let element = document.querySelector('.menuItemsContainer') as HTMLElement;
  //   if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('menuItemsContainer-inverse');
  //   } else {
  //     element.classList.remove('menuItemsContainer-inverse');
  //   }
  // }
}
