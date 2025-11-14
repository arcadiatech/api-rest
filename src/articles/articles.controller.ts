import { Controller, Get, Query, Param } from '@nestjs/common';

interface Article {
  id: string;
  title: string;
}

interface DetailedArticle {
  id: number;
  title: string;
  content: string;
  video: string;
  related_articles: Article[];
}

interface SubcategoryGroup {
  category_id: string;
  subcategory: string;
  articles: Article[];
}

@Controller('articles')
export class ArticlesController {
  @Get()
  getArticlesByCategory(@Query('category') category: string): SubcategoryGroup[] {
    if (category === 'cat001') {
      return [
        {
          category_id: 'cat001',
          subcategory: 'Profile',
          articles: [
            {
              id: '001',
              title: 'How to manage your accounts'
            },
            {
              id: '002',
              title: 'Updating your profile information'
            }
          ]
        },
        {
          category_id: 'cat001',
          subcategory: 'Security',
          articles: [
            {
              id: '003',
              title: 'Setting up two-factor authentication'
            },
            {
              id: '004',
              title: 'Recognizing phishing attempts'
            }
          ]
        }
      ];
    }
    return [];
  }

  @Get(':id')
  getArticleById(@Param('id') id: string): DetailedArticle {
    return {
      id: parseInt(id, 10),
      title: 'Sample Article',
      content: 'This is sample content for the article.',
      video: 'https://arcadia-platform-s3.s3.us-east-2.amazonaws.com/13383670_540_960_60fps.mp4',
      related_articles: [
        {
              id: '003',
              title: 'Setting up two-factor authentication'
            },
            {
              id: '004',
              title: 'Recognizing phishing attempts'
            }
      ]
    };
  }
}
