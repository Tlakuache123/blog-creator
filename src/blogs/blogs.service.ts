import { Injectable } from '@nestjs/common';
import { Blog, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.BlogCreateInput): Promise<Blog> {
    return this.prisma.blog.create({ data });
  }

  findAll() {
    return this.prisma.blog.findMany();
  }

  findOne(blogWhereUniqueInput: Prisma.BlogWhereUniqueInput) {
    return this.prisma.blog.findUnique({ where: blogWhereUniqueInput });
  }

  update(params: {
    where: Prisma.BlogWhereUniqueInput;
    data: Prisma.BlogUpdateInput;
  }) {
    const { where, data } = params;
    return this.prisma.blog.update({
      where,
      data,
    });
  }

  remove(where: Prisma.BlogWhereUniqueInput): Promise<Blog> {
    return this.prisma.blog.delete({ where });
  }
}
