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
  public readonly lang: string;

  constructor(config: NexusConfig, lang = 'en') {
    this.query = knex<T>(config.table);
    this.config = config;
    this.lang = lang;
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

  public async getItems(queryInput: QueryInput): Promise<T[]> {
    this.getItemsQuery(queryInput);
    const items = await this.query.select();
    for (const item of items) {
      for (const i18nField of this.config.i18nFields) {
        item[i18nField] = item[i18nField] ? item[i18nField][this.lang] : null;
      }
    }
    return items;
  }

  public async countItems(queryInput: QueryInput): Promise<{ count: number }> {
    this.getItemsQuery(queryInput, true);
    const results = await this.query.count({ count: '*' });
    return { count: results[0].count };
  }

  public async getItem(id: number): Promise<T> {
    this.query.where('id', id);
    const results = await this.query.select();
    const item = results[0];
    if (!item) return null;
    for (const i18nField of this.config.i18nFields) {
      item[i18nField] = item[i18nField] ? item[i18nField][this.lang] : null;
    }
    return item;
  }
}

export { Nexus };
