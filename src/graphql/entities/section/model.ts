import type { Section } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class SectionModel extends Nexus<Section> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default SectionModel;
