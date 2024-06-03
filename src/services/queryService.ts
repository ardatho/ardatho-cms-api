import { split } from 'lodash';
import type { Knex } from 'knex';
import type { QueryInput } from 'generated/graphql';

class QueryService {
  public static buildQuery(query: Knex.QueryBuilder, queryInput: QueryInput, all = false): Knex.QueryBuilder {
    if (queryInput.offset > 0 && !all) query.offset(queryInput.offset);

    if (queryInput.limit > 0 && !all) query.limit(queryInput.limit);

    if (queryInput.fields && queryInput.search) {
      query.where((builder) => {
        for (const field of queryInput.fields.split(',')) {
          builder.orWhereILike(field, `%${queryInput.search}%`);
        }
        return builder;
      });
    }

    if (queryInput.filter) {
      query.where(builder => QueryService.filterQuery(queryInput.filter, builder))
    }

    return query;
  }

	public static filterQuery(filters: string, query: Knex.QueryBuilder): Knex.QueryBuilder {
    const myFilters = filters.split(',');
    myFilters.map((key = null) => {
      if (key !== null) {
        // tslint:disable-next-line:prefer-const
        let [field, value] = key.split(':');
        let option = '';
        const regexOption = /(.*)\[(.*)\]$/;
        const regexMatch = field.match(regexOption);
        if (regexMatch !== null) {
          if (regexMatch[1]) {
            field = regexMatch[1];
          }
          if (regexMatch[2]) {
            option = regexMatch[2];
          }
        }
        const operand = field.match(/\((.*)\)/);
        if (operand !== null) {
          // Split where clause
          // const whereArray = field.split(operand[0])
          //   .map(fieldKey => this.handleWhereFormat(fieldKey, value, option));
          // Use only operand
          const joinString = ` ${operand[1]} `;
          // query += ` AND (${whereArray.join(joinString)})`;
        } else {
          query.andWhere((builder) => this.handleWhereFormat(builder, field, value, option))
          // query += ` AND ${this.handleWhereFormat(field, value, option)}`;
        }
      }
    });
		return query;
	}

	private static handleWhereFormat(builder: Knex.QueryBuilder, key: string, value: string, option = ''): Knex.QueryBuilder {
		const operand = value.match(/\((..)\)/);
		const inputs = operand !== null ? split(value, operand[0]) : [value];
		for (let index = 0; index < inputs.length; index++) {
			switch (option) {
				case 'isset':
					if (inputs[index] === 'null') {
            builder.whereNull(key);
					} else if (inputs[index] === 'notnull') {
            builder.whereNotNull(key);
					}
					break;
				case 'string':
					// result += ` ${value}`;
					break;
				case 'like':
          builder.andWhereILike(key, `%${inputs[index]}%`)
					break;
				// case 'regexp':
				// 	result += ` ${key} REGEXP "${inputs[index]}"`;
				// 	break;
				// case 'regexp_start':
				// 	result += ` ${key} REGEXP "^${inputs[index]}"`;
				// 	break;
				// case 'regexp_end':
				// 	result += ` ${key} REGEXP "${inputs[index]}$"`;
				// 	break;
				case '<':
				case '<=':
				case '>':
				case '>=':
				case '<>':
				case '=':
          builder.where(key, option, inputs[index]);
					break;
        default:
          builder.where(key, '=', inputs[index]);
					break;
			}
		}
		return builder;
	}
}

export { QueryService };
