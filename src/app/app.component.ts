import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterOutlet } from '@angular/router';
import { getManifest } from "@angular-architects/module-federation";
import { RouterModule } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";

import { buildRoutes } from './utils/routes';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatMenuModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    RouterOutlet,
    MenuItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'sandcastle';

  remotes: CustomRemoteConfig[] = [];

  constructor(
    private router: Router) {
      const manifest = getManifest<CustomManifest>();

      // Hint: Move this to an APP_INITIALIZER 
      //  to avoid issues with deep linking
      const routes = buildRoutes(manifest);
      this.router.resetConfig(routes);
  
      this.remotes = Object.values(manifest);
  }

  // async ngOnInit(): Promise<void> {
  //   const manifest = getManifest<CustomManifest>();

  //   // Hint: Move this to an APP_INITIALIZER 
  //   //  to avoid issues with deep linking
  //   const routes = buildRoutes(manifest);
  //   this.router.resetConfig(routes);

  //   this.remotes = Object.values(manifest);
  // }
}
