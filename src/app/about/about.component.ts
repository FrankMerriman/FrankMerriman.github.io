import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutMeInfo = `
  I am an enthusiastic problem solver with exceptional critical thinking skills. 
  My passion lies in utilizing technology and programming to streamline operations 
  and automate repetitive tasks. I possess excellent communication skills, especially 
  when it comes to clearly communicating complex technical information. Furthermore, 
  I have hands-on experience working with a wide range of programming languages and 
  technologies.
  `;
}
