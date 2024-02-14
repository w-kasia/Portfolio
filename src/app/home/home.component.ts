import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  goToContact() {
    this.router.navigate(['/contact'])
  }

  ngOnInit() {
    const buttons = document.querySelectorAll('button');

     const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

     const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInLeft');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    buttons.forEach(button => {
      observer.observe(button);
    });
  }
}
