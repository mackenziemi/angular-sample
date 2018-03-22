import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  items: Project[];

  progress = 'progressing';

  get Items(): Project[] {
    return this.items !== undefined ? this.items : new Array<Project>();
  }

  set Items(value: Project[]) {
    this.items = value;
  }

  constructor(private projectService: ProjectsService) { }



  ngOnInit() {
    this.projectService.getProjects()
      .subscribe(projects => {
        this.items = projects;
        this.progress = 'finished';
      });
  }

  onStatusUpdated(newStatus: string, id: number) {
    this.Items[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.Items.splice(index, 1);
  }

}
