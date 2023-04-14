import { Component } from '@angular/core';
import { Project } from './projects';

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Raspberry Pi.neapple',
      languages: ['C', 'Python'],
      description: 'A rouge AP that captures and remotely stores WiFi traffic.',
      link: 'https://github.com/FrankMerriman/Raspberry-Pi.neapple'
    },
    {
      name: 'Don\'t! Spill the Beans',
      languages: ['GDScript'],
      description: 'A video game involving secrets, funny faces and baked beans.',
      link: 'https://github.com/FyshStyx/SpillTheBeans'
    },
    {
      name: 'DevSecOps Tools',
      languages: ['HTML', 'CSS', 'JavaScript', 'Python', 'Nix'],
      description: 'A collection of tools for migrating a DevOps pipeline to a DevSecOps pipeline.',
      link: 'https://github.com/ChinmayManchanda/9447-Team1'
    },
    {
      name: 'SokDungeon',
      languages: ['Java'],
      description: 'A "sokoban x dungeon-crawler" video game.',
      link: 'https://github.com/FrankMerriman/SokDungeon'
    },
    {
      name: 'iBuy',
      languages: ['HTML', 'CSS', 'JavaScript', 'Python'],
      description: 'An E-Commerce website with an in-built chatbot.',
      link: 'https://github.com/unsw-cse-comp3900-9900-21T3/capstone-project-3900-h10a-ibuy'
    },
    {
      name: 'PythForum',
      languages: ['Python'],
      description: 'A forum that facilitates communication and file sharing among multiple users.',
      link: 'https://github.com/FrankMerriman/PythForum'
    },
    {
      name: 'AutoKim',
      languages: ['Python'],
      description: 'A Selenium bot that installs an AdBlocker and then watches TV shows.',
      link: 'https://github.com/FrankMerriman/AutoKim'
    },
  ];
}

