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

  // Create Home page
  await knex('page').insert({
    id: 1,
    status: 1,
    title: { "en":"Home page", "fr":"Accueil" },
    name: 'homepage',
    slug: { "en":"/", "fr":"/"  },
    i18n: 'en,fr'
  });

  // Insert user right for administrator roles
  await knex('userpermissions').insert([
    { keymodule: 'pages', permissions: 15, role_id: 1 },
  ]);

  await knex.schema.createTable('section', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.string('padding', 100).nullable();
    table.string('margin', 100).nullable();
    table.string('color', 20).nullable();
    table.tinyint('position', 3).unsigned().nullable();
    table.boolean('fit_height_to_bk_image').defaultTo(false);
    table.string('content_position', 20).nullable().defaultTo('center');
    table.string('parent_module', 100).notNullable().defaultTo('page');
    table.integer('parent_id').unsigned().notNullable();
    table.integer('rank').unsigned().nullable();
    table.string('i18n');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('row', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.boolean('gutters').notNullable().defaultTo(false);
    table.boolean('contained').notNullable().defaultTo(false);
    table.string('padding', 100).nullable();
    table.string('margin', 100).nullable();
    table.string('layout', 20).nullable();
    table.string('color', 20).nullable();
    table.integer('rank').unsigned().nullable();
    table.integer('section_id').unsigned().notNullable();
    table.string('i18n');
    table.timestamps(true, true);

    table.foreign('section_id').references('section.id').onDelete('CASCADE');
  });

  await knex.schema.createTable('column', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.tinyint('slide_per_view', 3).unsigned().defaultTo(0);
    table.tinyint('slide_per_group', 3).unsigned().defaultTo(0);
    table.boolean('auto_height').notNullable().defaultTo(false);
    table.boolean('auto_play').notNullable().defaultTo(false);
    table.boolean('loop_circuit').notNullable().defaultTo(false);
    table.integer('row_id').unsigned().notNullable();
    table.integer('rank').unsigned().nullable();
    table.string('i18n');
    table.timestamps(true, true);

    table.foreign('row_id').references('row.id').onDelete('CASCADE');
  });

  await knex.schema.createTable('block', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.json('href');
    table.boolean('targetblank').notNullable().defaultTo(false);
    table.string('padding', 100).nullable();
    table.string('margin', 100).nullable();
    table.string('bk_color', 20).nullable();
    table.string('text_color', 20).nullable();
    table.string('height', 50).nullable();
    table.string('width', 50).nullable();
    table.tinyint('position', 3).unsigned().nullable();
    table.tinyint('text_align', 3).unsigned().notNullable().defaultTo(0);
    table.boolean('fit_height_to_bk_image').defaultTo(false);
    table.integer('rank').unsigned().nullable();
    table.string('parent_module', 100).notNullable().defaultTo('column');
    table.integer('parent_id').unsigned().notNullable();
    table.string('i18n');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('content_block', function (table) {
    table.increments();
    table.json('title');
    table.integer('status').unsigned().defaultTo(0);
    table.json('href');
    table.boolean('targetblank').notNullable().defaultTo(false);
    table.json('content');
    table.string('content_type', 20).nullable();
    table.json('youtube_id');
    table.tinyint('content_align', 3).unsigned().notNullable().defaultTo(0);
    table.string('bk_color', 20).nullable();
    table.string('border_color', 20).nullable();
    table.string('content_color', 20).nullable();
    table.integer('block_id').unsigned().notNullable();
    table.string('i18n');
    table.timestamps(true, true);

    table.foreign('block_id').references('block.id').onDelete('CASCADE');
  });

  return;
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('content_block', function (table) {
    table.dropForeign('block_id');
  });
  await knex.schema.dropTableIfExists('content_block');
  await knex.schema.dropTableIfExists('block');

  await knex.schema.alterTable('column', function (table) {
    table.dropForeign('row_id');
  });
  await knex.schema.dropTableIfExists('column');

  await knex.schema.alterTable('row', function (table) {
    table.dropForeign('section_id');
  });
  await knex.schema.dropTableIfExists('row');

  await knex.schema.dropTableIfExists('section');
  await knex.schema.dropTableIfExists('page');

  return;
}

