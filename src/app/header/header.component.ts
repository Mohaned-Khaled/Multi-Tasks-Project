import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUrl: string;
  eventHappen = new Subject<string>();
  projectNum: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.currentUrl = this.location.path();
    if (!this.currentUrl) this.currentUrl = '/project/1';

    this.projectNum = +this.currentUrl.slice(
      this.currentUrl.lastIndexOf('/') + 1
    );

    if (
      this.projectNum > 10 ||
      this.projectNum < 1 ||
      !isFinite(this.projectNum)
    ) {
      this.projectNum = 1;
      this.currentUrl = '/project/1';
    }

    this.eventHappen.subscribe((data) => {
      this.currentUrl = data;
    });
  }

  onLeft() {
    let theNum =
      +this.currentUrl.slice(this.currentUrl.lastIndexOf('/') + 1) - 1;

    if (theNum < 1) theNum = 10;

    this.projectNum = theNum;
    this.router.navigate([`project/${theNum}`]);

    this.eventHappen.next(`project/${theNum}`);
  }

  onRight() {
    let theNum =
      +this.currentUrl.slice(this.currentUrl.lastIndexOf('/') + 1) + 1;

    if (theNum > 10) theNum = 1;
    this.projectNum = theNum;
    this.router.navigate([`project/${theNum}`]);

    this.eventHappen.next(`project/${theNum}`);
  }
}
