import { Injectable } from '@nestjs/common';

export interface Case {
  id: number;
  type: string;
  date: string;
  status: string;
}

@Injectable()
export class CasesService {
  private convertToISODate(dateStr: string): string {
    const [month, day, year] = dateStr.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}T00:00:00.000Z`;
  }

  private readonly cases: Case[] = [
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

  findAll(query?: string): Case[] {
    const transformCase = (case_: Case): Case => ({
      ...case_,
      date: this.convertToISODate(case_.date)
    });

    if (!query) {
      return this.cases.map(transformCase);
    }

    const lowercaseQuery = query.toLowerCase();
    return this.cases
      .filter(case_ => 
        case_.type.toLowerCase().includes(lowercaseQuery) ||
        case_.status.toLowerCase().includes(lowercaseQuery) ||
        case_.date.includes(query)
      )
      .map(transformCase);
  }
}
