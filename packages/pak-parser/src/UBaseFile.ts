import { BlacklistSerializer } from './serializers/BlacklistSerializer';

export class UBaseFile extends BlacklistSerializer {
  getName(): string {
    return 'UBaseFile';
  }
}
