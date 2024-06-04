import type { Page } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class PageModel extends Nexus<Page> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default PageModel;
