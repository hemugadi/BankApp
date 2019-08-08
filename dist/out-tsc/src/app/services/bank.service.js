import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Typescript custom enum for search types (optional)
export var SearchType;
(function (SearchType) {
    SearchType["BANGALORE"] = "BANGALORE";
    SearchType["MUMBAI"] = "MUMBAI";
    SearchType["CHENNAI"] = "CHENNAI";
})(SearchType || (SearchType = {}));
let BankService = class BankService {
    /**
     * Constructor of the Service with Dependency Injection
     * @param http The standard Angular HttpClient to make requests
     */
    constructor(http) {
        this.http = http;
        this.url = 'https://vast-shore-74260.herokuapp.com/banks';
    }
    searchData(type) {
        return this.http.get(`${this.url}?city=${type}`);
    }
};
BankService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], BankService);
export { BankService };
//# sourceMappingURL=bank.service.js.map