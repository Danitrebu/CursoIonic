import { Component } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.page.html',
  styleUrls: ['./sandbox.page.scss'],
})
export class SandboxPage {

  public numExpanded = 0;

  public upVotesSum = 4;

  public downVotesSum = 3;

  public ratingsData = [
    { upVotes: 0, downVotes: 0 },
    { upVotes: 1, downVotes: 0 },
    { upVotes: 0, downVotes: 2 },
    { upVotes: 3, downVotes: 1 }
  ];

  constructor() {

  }

  public expandableContentChanged(isExpanded: boolean): void {

    this.numExpanded += isExpanded ? 1 : -1;
  }

  public voteSubmitted(isPositive: boolean): void {

    if (isPositive) {
      this.upVotesSum++;
    } else {
      this.downVotesSum++;
    }
  }
}
