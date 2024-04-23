import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("todo", (table) => {
    table
      .uuid("id")
      .primary()
      .notNullable()
      .defaultTo(knex.raw("uuid_generate_v4()"));

    table.string("description").notNullable();
    table.boolean("done").notNullable().defaultTo("false");
    table.timestamp("createdAt").notNullable();
    table.timestamp("updatedAt").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("todo");
}
