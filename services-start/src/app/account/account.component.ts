import { Component, Input, inject } from '@angular/core';
//import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  //private loggingService: LoggingService;
  private accountsService: AccountsService;

  // Alternative way of injecting services
  constructor() {
    //this.loggingService = inject(LoggingService);
    this.accountsService = inject(AccountsService);
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
  }
}
