import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { getManifest } from "@angular-architects/module-federation";
import { MatIconModule } from "@angular/material/icon";

import { CustomManifest, CustomRemoteConfig } from '../utils/config';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  remotes: CustomRemoteConfig[] = [];

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();
    this.remotes = Object.values(manifest);
  }

}