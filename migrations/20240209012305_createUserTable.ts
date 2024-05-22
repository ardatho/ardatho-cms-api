import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('user', function (table) {
    table.increments();
    table.string('firstname');
    table.string('lastname');
    table.string('email');
    table.unique('email');
    table.string('password');
    table.integer('status');
    table.string('last_login_date');
    table.timestamps(true, true);
  });

  await knex('user').insert({ id: 1, status: 1, firstname: 'admin', lastname: 'Ardatho', email: 'admin@ardatho.com', password: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', created_at: new Date(), updated_at: new Date() })

  return;
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user');
}

