import { OmitType, PartialType } from '@nestjs/mapped-types';
import { BaseBlogDto } from './base-blog.dto';

export class UpdateBlogDto extends PartialType(
  OmitType(BaseBlogDto, ['authorId'] as const),
) {}
