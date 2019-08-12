import { Component, OnInit } from '@angular/core';

import { BankService, SearchType } from './../../services/bank.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.page.html',
  styleUrls: ['./banks.page.scss'],
})
export class BanksPage implements OnInit {
  
  results: any;
  filters: any;
  searchTerm: string = '';
  type: SearchType = SearchType.BANGALORE;

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.searchChanged()
  }

  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.bankService.searchData(this.type)
    const finalResults = [];
    this.results.subscribe((val) => {
      for (const bankDetails of val) {
        if (bankDetails["bank_name"].toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          bankDetails["branch"].toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          bankDetails["ifsc"].toLowerCase().includes(this.searchTerm.toLowerCase())) {
            finalResults.push(bankDetails);
          }
      }
    });
    this.filters = of(finalResults);
  }

}