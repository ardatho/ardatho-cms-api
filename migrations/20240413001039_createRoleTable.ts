import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('role', function (table) {
    table.increments();
    table.json('title');
    table.string('i18n');
    table.timestamps(true, true);
  });

  await knex('role').insert({ id: 1, title: { "en": "Super Administrator", "fr": "Super Administrateur" }, i18n: 'en,fr' })

  await knex.schema.createTable('user_role', function (table) {
    table.integer('user_id').unsigned();
    table.integer('role_id').unsigned();
    table.timestamps(true, true);
    table.primary(['user_id', 'role_id']);
    table.foreign('user_id').references('user.id').onDelete('CASCADE');
    table.foreign('role_id').references('role.id').onDelete('CASCADE');
  });

  await knex('user_role').insert({ user_id: 1, role_id: 1 })

  await knex.schema.createTable('userpermissions', function (table) {
    table.increments();
    table.string('keymodule');
    table.tinyint('permissions');
    table.integer('role_id').unsigned();
    table.timestamps(true, true);
    table.foreign('role_id').references('role.id').onDelete('CASCADE');
  });

  await knex('userpermissions').insert([
    { keymodule: 'users', permissions: 15, role_id: 1 },
    { keymodule: 'users.roles', permissions: 15, role_id: 1 },
  ])

  return;
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('userpermissions', function (table) {
    table.dropForeign('role_id');
  });

  await knex.schema.alterTable('user_role', function (table) {
    table.dropForeign('user_id');
    table.dropForeign('role_id');
  });

  await knex.schema.dropTableIfExists('userpermissions');
  await knex.schema.dropTableIfExists('user_role');
  await knex.schema.dropTableIfExists('role');

  return;
}

