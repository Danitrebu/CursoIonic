import { Component, OnInit } from '@angular/core';

import { EmailsService } from '../../services/emails.service';
import { Email } from '../../models/email.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.page.html',
  styleUrls: ['./email-details.page.scss'],
})
export class EmailDetailsPage implements OnInit {

  public email: Email;

  constructor(
    private activatedRoute: ActivatedRoute,
    private emailsService: EmailsService
  ) { }

  public ngOnInit(): void {

    this.email = this.emailsService.getEmail(
      +this.activatedRoute.snapshot.paramMap.get('email-id')
    );
  }
}
