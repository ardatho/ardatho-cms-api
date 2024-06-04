import type { Block } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class BlockModel extends Nexus<Block> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default BlockModel;
