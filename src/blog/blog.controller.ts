// src/blog/blog.controller.ts
import { Body, Controller, Get, Post, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from './cloudinary.service';

@Controller('blogs')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createBlog(@Body() dto: BlogDto, @GetUser() user: User, @UploadedFile() file: Express.Multer.File) {
    const pictureUrl = await this.cloudinaryService.uploadImage(file);
    return this.blogService.createBlog({ ...dto, pictureUrl }, user.id);
  }

  @Get()
  async getAllBlogs() {
    return this.blogService.getAllBlogs();
  }
}
