import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomManifest, CustomRemoteConfig } from '../../utils/config';
import { getManifest } from "@angular-architects/module-federation";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
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