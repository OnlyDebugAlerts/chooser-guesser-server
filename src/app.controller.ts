import { Controller, Request, Get, Req, Post, UseGuards } from '@nestjs/common';
import * as parser from 'ua-parser-js';

import config from './config';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,

  ) { }

  @Get('/comments')
  async getComments() {
    const { items } = await this.appService.callApi(config.getVideoListUrl);
  }




  @Get('/categories')
  async getCategories(@Req() req: Request) {
    console.log(req.headers);
    const ua = parser(req.headers['user-agent']);
    console.log(ua)
    // const {items} = await this.appService.getVideos();
  }

  @Get('/vids')
  async getVideos() {
    const { nextPageToken, items } = await this.appService.callApi(config.getVideoListUrl);
    console.log(nextPageToken, items);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
