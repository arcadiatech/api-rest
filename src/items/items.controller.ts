import { Controller, Get, Query } from '@nestjs/common';

@Controller('topics')
export class ItemsController {
  private topics = [
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

  @Get()
  getTopics(@Query('q') searchTerm?: string): any[] {
    if (!searchTerm) {
      return this.topics;
    }

    const searchLower = searchTerm.toLowerCase();
    return this.topics.filter((topic) => {
      return topic.name.toLowerCase().includes(searchLower) ||
        topic.category.toLowerCase().includes(searchLower);
    });
  }
}
