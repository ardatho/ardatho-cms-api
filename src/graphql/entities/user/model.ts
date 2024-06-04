import type { User } from 'generated/graphql';
import { Nexus } from 'services/nexus/nexus';

import config from './config';

class UserModel extends Nexus<User> {
  constructor(lang: string) {
    super(config, lang);
  }
}

export default UserModel;
