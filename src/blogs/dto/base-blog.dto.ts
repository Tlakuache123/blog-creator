import { Blog } from '@prisma/client';

export class BaseBlogDto implements Blog {
  id: number;
  title: string;
  content: string;
  authorId: number;
}
