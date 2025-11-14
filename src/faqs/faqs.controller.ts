import { Controller, Get } from '@nestjs/common';

interface Faq {
  id: string;
  question: string;
  answer: string;
}

@Controller('faqs')
export class FaqsController {
  private readonly faqs: Faq[] = [
    {
      id: 'faq001',
      question: 'How to create an account?',
      answer: 'To create an account, click on the sign-up button and fill in the required details.',
    },
    {
      id: 'faq002',
      question: 'How to reset my password?',
      answer: 'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      id: 'faq003',
      question: 'How to contact support?',
      answer: 'You can contact support through the help center or by emailing support@company.com.',
    },
  ];

  @Get()
  getFaqs(): Faq[] {
    return this.faqs;
  }
}
