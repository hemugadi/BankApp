import { Component, OnInit } from '@angular/core';

import { BankService, SearchType } from './../../services/bank.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
})
export class BanksPage implements OnInit {
  
  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.BANGALORE;

  constructor(private bankService: BankService) { }

  ngOnInit() {
  }
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.bankService.searchData(this.searchTerm, this.type);
  }

}