import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailsService } from '../../services/emails.service';
import { Email } from '../../models/email.model';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.page.html',
  styleUrls: ['./emails-list.page.scss'],
})
export class EmailsListPage implements OnInit, OnDestroy {

  public folderId: string;

  public emails: Email[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailsService: EmailsService
  ) {
    console.log('[EmailsListPage] constructor');
  }

  public ngOnInit(): void {

    this.folderId = this.activatedRoute.snapshot.paramMap.get('folder-id');

    console.log('[EmailsListPage] ngOnInit');

    this.emails = this.emailsService.getEmails(this.folderId);
  }

  public ionViewDidEnter(): void {

    console.log('[EmailsListPage] ionViewDidEnter');
  }

  public ionViewDidLeave(): void {

    console.log('[EmailsListPage] ionViewDidLeave');
  }

  public ngOnDestroy(): void {

    console.log('[EmailsListPage] ngOnDestroy', this.folderId);
  }
}
