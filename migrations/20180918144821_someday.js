
exports.up = function(knex, Promise) {
    return knex.schema.createTable("someday", table => { 
        table.increments();
        table.string('image_url');
        table.string('name');
        table.string('country'); 
        table.string('address');
        table.string('city');
        table.string('state');
        table.string('description', 1000);
        
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("someday");
};
