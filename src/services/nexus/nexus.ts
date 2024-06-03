import knex from 'config/knex';
import type { QueryInput } from 'generated/graphql';
import type { Knex } from 'knex';
import { QueryService } from 'services/queryService';

interface NexusConfig {
  table: string; // SQL table name
  i18nFields: string[]; // i18n default fields
  keyModule?: string; // key for permissions module
}

interface NexusItem<T> {
  query: Knex.QueryBuilder<T>;
  config: NexusConfig;
}

class Nexus<T> implements NexusItem<T> {
  public readonly query;
  public readonly config;

  constructor(config: NexusConfig) {
    this.query = knex<T>(config.table);
    this.config = config;
  }

  public getItemsQuery(queryInput: QueryInput, all = false) {
    if (queryInput.offset > 0 && !all) this.query.offset(queryInput.offset);

    if (queryInput.limit > 0 && !all) this.query.limit(queryInput.limit);

    if (queryInput.fields && queryInput.search) {
      this.query.where((builder) => {
        for (const field of queryInput.fields.split(',')) {
          builder.orWhereILike(field, `%${queryInput.search}%`);
        }
        return builder;
      });
    }

    if (queryInput.filter) {
      this.query.where((builder) => QueryService.filterQuery(queryInput.filter, builder));
    }
  }
}

export { Nexus };
