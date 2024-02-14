import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private router: Router){}

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToContactForm() {
    this.router.navigate(['/contact']);
  }

  ngOnInit() {
    const images = document.querySelectorAll('img');
    const paragraphs = document.querySelectorAll('p');
    const buttons = document.querySelectorAll('button');

     const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

     const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInTop');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    images.forEach(image => {
      observer.observe(image);
    });
    paragraphs.forEach(paragraph => {
      observer.observe(paragraph);
    });
    buttons.forEach(button => {
      observer.observe(button);
    });
  }
}
