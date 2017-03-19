import { Inject, Injectable } from '@angular/core';

@Injectable()
export class SampleService {

  constructor(@Inject('config') private config: string) {
    console.log(this.config);
  }
}
