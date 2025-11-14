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

  getCaseChat(caseId: number) {
    // Find the case to ensure it exists
    const case_ = this.cases.find(c => c.id === caseId);
    if (!case_) {
      throw new Error(`Case with id ${caseId} not found`);
    }

    // Return mock chat data - replace with actual chat implementation
    return {
      caseId: case_.id,
      messages: [
        {
          id: 1,
          sender: 'user',
          message: 'I have a disputed transation in regards to a purchasing of an electronic product on amazon. Can you help me?',
          timestamp: new Date().toISOString()
        },
        {
          id: 2,
          sender: 'support:automatic',
          message: 'Someone from our team will start working on your case within 24 hrs.',
          timestamp: new Date().toISOString()
        },
        {
          id: 3,
          sender: 'support:automatic',
          message: 'Your case is now being reviewed.',
          timestamp: new Date().toISOString()
        },
        {
          id: 4,
          sender: 'support:attachment',
          message: 'Invoice-26-04-2021.pdf',
          attachment: "https://arcadia-platform-s3.s3.us-east-2.amazonaws.com/Kassin%2C+S.+Fein%2C+S.+%26+Markus%2C+H.+R.+(2014).+Actitudes.+En+Psicologi%CC%81a+social+(9a.+ed.)+(pp.+204-251).+Cengage+Learning.pdf",
          timestamp: new Date().toISOString()
        },
        {
          id: 5,
          sender: 'agent:Ahmed',
          message: 'Is this the transaction you are referring to?',
          timestamp: new Date().toISOString()
        },
        {
          id: 6,
          sender: 'user',
          message: 'Yes',
          timestamp: new Date().toISOString()
        }
      ]
    };
  }
}
