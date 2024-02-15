import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  private routeSubscription: Subscription;

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

    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.updateUser(params);
    });
  }

  // Angular will automatically handle the subscription, so adding it here for just an example
  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
