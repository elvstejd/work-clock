import { Injectable } from '@angular/core';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class IdGeneratorService {
  private ID_LENGTH = 5;

  generate(prefix?: string) {
    if (prefix) return prefix + '_' + nanoid(this.ID_LENGTH);
    return nanoid(this.ID_LENGTH);
  }
}
