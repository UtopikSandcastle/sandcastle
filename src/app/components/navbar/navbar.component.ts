import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CustomManifest, CustomRemoteConfig } from '../../utils/config';
import { getManifest } from '@angular-architects/module-federation';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, RouterLink, TitleCasePipe, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  @Input() title: string | undefined;

  remotes: CustomRemoteConfig[] = [];

  ngOnInit() {
    const manifest = getManifest<CustomManifest>();
    this.remotes = Object.values(manifest);
  }

}
