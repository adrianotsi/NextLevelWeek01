import Knex from "knex";

export async function up(knex: Knex){
    // Criar tabela
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary();
        table.string('point_id')
            .notNullable()
            .references('id')
            .inTable('points');
        table.string('item_id')
            .notNullable()
            .references('id')
            .inTable('items');
    })
} 

export async function down(Knex: Knex){
    //Voltar Atrás
    return Knex.schema.dropTable('point');
}