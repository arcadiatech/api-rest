import { Controller, Get } from '@nestjs/common';

interface Category {
  id: string;
  name: string;
}

@Controller('articles_category')
export class ArticlesCategoryController {
  private readonly categories: Category[] = [
    {
      id: 'cat001',
      name: 'Accounts'
    },
    {
      id: 'cat002',
      name: 'Cards'
    },
    {
      id: 'cat003',
      name: 'Transfers'
    },
    {
      id: 'cat004',
      name: 'Loans'
    },
    {
      id: 'cat005',
      name: 'Deposits'
    },
    {
      id: 'cat006',
      name: 'Fees'
    },
    {
      id: 'cat007',
      name: 'General'
    }
  ];

  @Get()
  getCategories(): Category[] {
    return this.categories;
  }
}
