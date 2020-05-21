import * as path from 'path';

export const engineeringRoot = path.resolve(__dirname, '..', '..');

export namespace sourceData {
  export const root = path.join(engineeringRoot, '.source-data');
  export const headers = path.join(root, 'headers');
  export const ue4pak = path.join(root, 'ue4pak');
}

export namespace dataLanding {
  export const root = path.join(engineeringRoot, '.data-landing');
  export const data = path.join(root, 'data');
  export const interfaces = path.join(root, 'interfaces');
  export const json = path.join(root, 'json');
}

export namespace dataWarehouse {
  export const root = path.join(engineeringRoot, '.data-warehouse');
}
