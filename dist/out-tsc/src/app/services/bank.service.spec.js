import { TestBed } from '@angular/core/testing';
import { BankService } from './bank.service';
describe('BankService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(BankService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bank.service.spec.js.map