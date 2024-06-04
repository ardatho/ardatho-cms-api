import type { Column } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class ColumnModel extends Nexus<Column> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default ColumnModel;
