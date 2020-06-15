import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-content',
  templateUrl: './expandable-content.component.html',
  styleUrls: ['./expandable-content.component.scss'],
})
export class ExpandableContentComponent {

  @Input()
  public title: string;

  @Output()
  public change = new EventEmitter<boolean>();

  public isExpanded = false;

  public iconExpanded = '+';

  constructor() {

  }

  public toggleExpand(): void {

    this.isExpanded = !this.isExpanded;

    this.iconExpanded = this.isExpanded ? '-' : '+';

    this.change.emit(this.isExpanded);
  }
}
