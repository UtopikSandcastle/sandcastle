import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { CustomRemoteConfig } from '../../utils/config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [MatMenuModule, MatMenuModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  @Input() remoteConfig: CustomRemoteConfig | undefined

  routeList: unknown[] = [];

  constructor(private router: Router) {
    this.routeList = this.router.config;
    
  }

  
}
