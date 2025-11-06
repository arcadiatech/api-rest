"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesService = void 0;
const common_1 = require("@nestjs/common");
let CasesService = class CasesService {
    convertToISODate(dateStr) {
        const [month, day, year] = dateStr.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
    }
    cases = [
        {
            id: 634354,
            type: "Disputed Transaction",
            date: "04/22/2024",
            status: "New Case"
        },
        {
            id: 634355,
            type: "Callback Request",
            date: "04/22/2024",
            status: "New Case"
        },
        {
            id: 634356,
            type: "Account Details Complaint",
            date: "02/17/2021",
            status: "In Progress"
        },
        {
            id: 634357,
            type: "Account Statement",
            date: "02/17/2022",
            status: "Closed"
        },
        {
            id: 634358,
            type: "Card Limit Request",
            date: "02/17/2022",
            status: "Closed"
        },
        {
            id: 634359,
            type: "Card Limit Request",
            date: "02/17/2020",
            status: "Closed"
        },
        {
            id: 634360,
            type: "Card Limit Request",
            date: "02/17/2019",
            status: "Closed"
        }
    ];
    findAll(query) {
        const transformCase = (case_) => ({
            ...case_,
            date: this.convertToISODate(case_.date)
        });
        if (!query) {
            return this.cases.map(transformCase);
        }
        const lowercaseQuery = query.toLowerCase();
        return this.cases
            .filter(case_ => case_.type.toLowerCase().includes(lowercaseQuery) ||
            case_.status.toLowerCase().includes(lowercaseQuery) ||
            case_.date.includes(query))
            .map(transformCase);
    }
};
exports.CasesService = CasesService;
exports.CasesService = CasesService = __decorate([
    (0, common_1.Injectable)()
], CasesService);
//# sourceMappingURL=cases.service.js.map