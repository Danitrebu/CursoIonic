import { Injectable } from '@angular/core';
import { Email } from '../models/email.model';

@Injectable()
export class EmailsService {

  private emails: Email[] = [
    {
      id: 1,
      title: 'Email 1',
      body: 'Email 1 body',
      folder: 'Inbox'
    },
    {
      id: 2,
      title: 'Email 2',
      body: 'Email 2 body',
      folder: 'Inbox'
    },
    {
      id: 3,
      title: 'Email 3',
      body: 'Email 3 body',
      folder: 'Inbox'
    },
    {
      id: 4,
      title: 'Email 4',
      body: 'Email 4 body',
      folder: 'Outbox'
    },
    {
      id: 5,
      title: 'Email 5',
      body: 'Email 5 body',
      folder: 'Outbox'
    },
    {
      id: 6,
      title: 'Email 5',
      body: 'Email 5 body',
      folder: 'Favorites'
    }
  ];

  public getEmails(folder: string): Email[] {
    return this.emails.filter(e => e.folder === folder);
  }

  public getEmail(id: number): Email {
    return this.emails.find(e => e.id === id);
  }
}
