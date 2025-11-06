"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsController = void 0;
const common_1 = require("@nestjs/common");
let ItemsController = class ItemsController {
    topics = [
        { id: 1, name: 'Account Details', category: 'Accounts' },
        { id: 2, name: 'Account Statement', category: 'Accounts' },
        { id: 3, name: 'IBAN Letter', category: 'Accounts' },
        { id: 4, name: 'Balance Certificate', category: 'Accounts' },
        { id: 5, name: 'Transaction History', category: 'Accounts' },
        { id: 6, name: 'Freeze Card', category: 'Cards' },
        { id: 7, name: 'Manage Card Limits', category: 'Cards' },
        { id: 8, name: 'Ask for a new card', category: 'Cards' },
        { id: 9, name: 'Local Transfer', category: 'Transfer' },
        { id: 10, name: 'International Transfer', category: 'Transfer' },
        { id: 11, name: 'Loan Application', category: 'Loan' },
        { id: 12, name: 'Loan Payment', category: 'Loan' },
        { id: 13, name: 'Loan Statement', category: 'Loan' },
        { id: 14, name: 'Fixed Deposit Opening', category: 'Deposits' },
        { id: 15, name: 'Fixed Deposit Closing', category: 'Deposits' },
        { id: 16, name: 'Incorrect Charge', category: 'Fees' },
        { id: 17, name: 'Fee Reversal Request', category: 'Fees' },
        { id: 18, name: 'Transaction Fee Explanation', category: 'Fees' },
        { id: 19, name: 'Product Information', category: 'General' },
        { id: 20, name: 'Complain/Feedback', category: 'General' },
        { id: 21, name: 'Appointment Request', category: 'General' },
        { id: 22, name: 'Branch / ATM Information', category: 'General' },
        { id: 23, name: 'Regulatory Information', category: 'General' },
    ];
    getTopics(searchTerm) {
        if (!searchTerm) {
            return this.topics;
        }
        const searchLower = searchTerm.toLowerCase();
        return this.topics.filter((topic) => {
            return topic.name.toLowerCase().includes(searchLower) ||
                topic.category.toLowerCase().includes(searchLower);
        });
    }
};
exports.ItemsController = ItemsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ItemsController.prototype, "getTopics", null);
exports.ItemsController = ItemsController = __decorate([
    (0, common_1.Controller)('topics')
], ItemsController);
//# sourceMappingURL=items.controller.js.map