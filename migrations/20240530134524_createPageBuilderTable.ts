import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('page', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.integer('parent_id').unsigned().nullable();
    table.smallint('rank').unsigned().nullable();
    table.string('name');
    table.json('meta_title');
    table.json('meta_description');
    table.json('slug');
    table.integer('template_id').unsigned().nullable();
    table.integer('page_type').unsigned().nullable();
    table.string('i18n');
    table.timestamps(true, true);
  });

  await knex('role').insert({ id: 1, title: { "en": "Super Administrator", "fr": "Super Administrateur" }, i18n: 'en,fr' })

  /* Create Home page */
  await knex('userpermissions').insert({
    id: 1,
    status: 1,
    title: { "en":"Home page", "fr":"Accueil" },
    mame: 'homepage',
    slug: { "en":"/", "fr":"/"  },
    i18n: 'en,fr'
  })

  /* Insert user right for administrator roles */
  await knex('userpermissions').insert([
    { keymodule: 'pages', permissions: 15, role_id: 1 },
  ])
  return;
}


export async function down(knex: Knex): Promise<void> {
  return;
}

