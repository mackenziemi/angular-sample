import {
   Component,
   OnInit,
   Input,
   Output,
   EventEmitter
} from '@angular/core';

import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() model: Project;
  @Output() statusUpdated = new EventEmitter<string>();
  @Output() projectDeleted = new EventEmitter<void>();

  get Name(): string {
    return this.model !== undefined ? this.model.name : '';
  }

  set Name(value: string) {
    this.model.name = value;
  }

  get Description(): string {
    return this.model !== undefined ? this.model.description : '';
  }

  set Description(value: string) {
    this.model.description = value;
  }

  get Status(): string {
    return this.model !== undefined ? this.model.status : 'active';
  }

  set State(value: string) {
    this.model.status = value;
  }

  constructor() { }

  ngOnInit() {
  }

  onUpdateStatus(newStatus: string) {
    this.statusUpdated.emit(newStatus);
  }

  onDelete() {
    this.projectDeleted.emit();
  }

  getPrjStatusClass() {
    return {
      'alert-success': this.Status === 'active',
      'alert-default': this.Status === 'inactive',
      'alert-danger': this.Status === 'critical'
    };
  }

}
