import type { Contentblock } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class ContentblockModel extends Nexus<Contentblock> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default ContentblockModel;
