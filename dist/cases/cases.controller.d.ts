import { CasesService } from './cases.service';
export declare class CasesController {
    private readonly casesService;
    constructor(casesService: CasesService);
    findAll(query?: string): import("./cases.service").Case[];
}
