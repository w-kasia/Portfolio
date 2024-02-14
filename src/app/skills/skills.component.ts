import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  ngOnInit() {
    const images = document.querySelectorAll('img');

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
  }
}
