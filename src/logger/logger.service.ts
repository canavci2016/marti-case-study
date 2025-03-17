import { LoggerService, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable({ scope: Scope.TRANSIENT })
export class Logger implements LoggerService {
  constructor(
    @InjectRepository(Log)
    private repository: Repository<Log>,
  ) {}

  setContext(name: string) {
    console.log('context name:' + name);
  }
  /**
   * Write a 'log' level log.
   */
  async log(message: string, ...optionalParams: any[]) {
    console.log(message, optionalParams);
    return this.repository.save({ content: message, payload: optionalParams });
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }
}
