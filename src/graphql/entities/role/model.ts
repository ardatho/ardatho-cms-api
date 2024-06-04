import type { Role } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class RoleModel extends Nexus<Role> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default RoleModel;
