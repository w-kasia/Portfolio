import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.css']
})

export class StrengthsComponent implements OnInit {
  ngOnInit() {
    const icons = document.querySelectorAll('.icon');

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

    icons.forEach(icon => {
      observer.observe(icon);
    });
  }
}

