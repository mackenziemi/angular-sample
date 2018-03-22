import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Project } from '../models/project.model';

@Injectable()
export class ProjectsService {

  private projects: Project[] = [
    { name: 'New Product 1', description: 'The new product that is going to make us a lot of money', status: 'active' },
    { name: 'Mainline Product', description: 'Bread and butter of the company', status: 'critical' },
    { name: 'Legacy Product', description: 'The old product that built the company but is out of date', status: 'inactive' },
    { name: 'New Product 2', description: 'A pet project of a senior executive', status: 'active' },
  ];

  getProjects(): Observable<Project[]> {
    const projectLoader = Observable.create((observer) => {
      setTimeout(() => {
        observer.next(this.projects);
      }, 2000);
      });
      return projectLoader;
    }
  }
