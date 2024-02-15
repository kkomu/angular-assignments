import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private route: ActivatedRoute) {}

  updateUser(params) {
    const { id, name } = params;

    this.user = {
      id,
      name,
    };
  }

  ngOnInit() {
    this.updateUser(this.route.snapshot.params);

    this.route.params.subscribe((params: Params) => {
      this.updateUser(params);
    });
  }
}
