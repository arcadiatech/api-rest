import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { FaqsController } from './faqs/faqs.controller';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesCategoryController } from './articles/articles-category.controller';
import { CasesModule } from './cases/cases.module';

@Module({
  imports: [CasesModule],
  controllers: [AppController, ItemsController, FaqsController, ArticlesController, ArticlesCategoryController],
  providers: [AppService],
})
export class AppModule {}
