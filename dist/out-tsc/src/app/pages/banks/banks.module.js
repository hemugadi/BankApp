import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BanksPage } from './banks.page';
const routes = [
    {
        path: '',
        component: BanksPage
    }
];
let BanksPageModule = class BanksPageModule {
};
BanksPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [BanksPage]
    })
], BanksPageModule);
export { BanksPageModule };
//# sourceMappingURL=banks.module.js.map