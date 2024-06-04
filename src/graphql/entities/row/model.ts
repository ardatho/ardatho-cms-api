import type { Row } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class RowModel extends Nexus<Row> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default RowModel;
