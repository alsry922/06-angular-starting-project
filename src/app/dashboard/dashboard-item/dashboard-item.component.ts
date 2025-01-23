import {Component, Input} from '@angular/core';
import {NgSwitchCase} from "@angular/common";
import {Image} from "./dashboard-item.model";

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  @Input({required: true}) image!: Image;
  @Input({required: true}) title!: string;
}
