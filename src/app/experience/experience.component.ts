import { Component } from '@angular/core';
import { Job } from './experience';

@Component({
  selector: 'portfolio-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  // List of companies worked at
  jobList : Job[] = [
    {
      jobCompany: 'FyshStyx',
      jobTitle: 'Founder, Lead Developer',
      jobDescription: 'Founder of independent game studio, FyshStyx.',
      startDate: new Date(2022, 5, 1)
    },
    {
      jobCompany: 'University of New South Wales',
      jobTitle: 'Security Tutor',
      jobDescription: 'Trained students to develop problem-solving abilities and security-based hacking techniques using real-world case studies.',
      startDate: new Date(2022, 2, 11),
      endDate: new Date(2022, 5, 8)
    },
    {
      jobCompany: 'Advice RegTech',
      jobTitle: 'Intern Developer',
      jobDescription: 'Fixed bugs in a C# program and used test-driven development for a .NET project as part of my work on assigned Jira tickets.',
      startDate: new Date(2021, 3, 17),
      endDate: new Date(2021, 4, 5)
    },
  ];

}
