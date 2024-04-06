import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getManifest } from "@angular-architects/module-federation";
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from "@angular/router";

import { buildRoutes } from './utils/routes';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Sandcastle';

  remotes: CustomRemoteConfig[] = [];

  constructor(
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();

    // Hint: Move this to an APP_INITIALIZER 
    //  to avoid issues with deep linking
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    // this.remotes = Object.values(manifest);
  }
}
