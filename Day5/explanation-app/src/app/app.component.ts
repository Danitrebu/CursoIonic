import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { LabelsService } from './services/labels.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;

  public appPages = [
    {
      title: 'Inbox',
      url: '/emails/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/emails/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/emails/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/emails/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/emails/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/emails/Spam',
      icon: 'warning'
    }
  ];

  public labels: string[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private labelsService: LabelsService
  ) { }

  public ngOnInit(): void {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    const path = window.location.pathname.split('emails/')[1];

    if (path) {
      this.selectedIndex = this.appPages.findIndex(page =>
        page.title.toLowerCase() === path.toLowerCase()
      );
    }

    this.labels = this.labelsService.getLabels();
  }
}
