import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-browser'

@Component({
  selector: 'app-sync-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sync-info.component.html',
  styleUrl: './sync-info.component.scss'
})
export class SyncInfoComponent implements OnInit {
  account: AccountInfo | null = null;

 constructor(
  private authService: MsalService
 ){}

 ngOnInit(): void {
   var accounts = this.authService.instance.getAllAccounts()
   if(accounts.length > 0)
    this.account = accounts[0]
 }
}
