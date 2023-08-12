import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EnvironmentVariables } from './environmentVariables';

@Injectable()
export class EnvService {
  constructor(private configService: ConfigService<EnvironmentVariables>) {}

  get port() {
    return this.configService.get('PORT', { infer: true });
  }

  get globalPrefix() {
    return this.configService.get('GLOBAL_PREFIX', { infer: true });
  }
}
