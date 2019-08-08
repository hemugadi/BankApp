import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BankService, SearchType } from './../../services/bank.service';
let BanksPage = class BanksPage {
    constructor(bankService) {
        this.bankService = bankService;
        this.searchTerm = '';
        this.type = SearchType.BANGALORE;
        this.results = this.bankService.searchData(this.type);
        this.filters = this.results;
    }
    ngOnInit() {
        this.results = this.bankService.searchData(this.type);
        this.filters = this.results;
    }
    searchChanged() {
        this.results = this.bankService.searchData(this.type);
        this.filters = this.results;
       }
};
BanksPage = tslib_1.__decorate([
    Component({
        selector: 'app-banks',
        templateUrl: './banks.page.html',
        styleUrls: ['./banks.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [BankService])
], BanksPage);
export { BanksPage };
//# sourceMappingURL=banks.page.js.map