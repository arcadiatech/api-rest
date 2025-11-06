export interface Case {
    id: number;
    type: string;
    date: string;
    status: string;
}
export declare class CasesService {
    private convertToISODate;
    private readonly cases;
    findAll(query?: string): Case[];
}
