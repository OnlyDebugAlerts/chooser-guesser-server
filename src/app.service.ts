import { Injectable, OnModuleInit } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import config from './config';
import axios from 'axios';

@Injectable()
export class AppService implements OnModuleInit {
  redisClient;
  constructor(private readonly redisService: RedisService) { }

  async onModuleInit() {
    this.initredisClient();
    this.cacheVideos();
  }

  initredisClient() {
    this.redisClient = this.redisService.getClient();
  }

  async callApi(url, options = '') {
    const { data } = await axios.get(`${url}${config.API_KEY}${options}`)
    return data;
  }

  async cacheVideos() {
    const { items, nextPageToken } = await this.callApi(config.getVideoListUrl);
    // const 
    // const objToRedis = {
    //   id: 
    // }
  }
}
