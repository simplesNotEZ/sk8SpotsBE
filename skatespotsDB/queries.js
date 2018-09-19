const database = require("./database-connection");

module.exports = {
    list(){
        return database('table_name');
    },
    read(id){
        return database('table_name').where('id', id).returning('*')
            .then(record => record[0])
    },
    create(table_object){
        return database('table_name').insert(table_object).returning('*')
            .then(record => record[0])
    },
    update(id, table_object){
        return database('table_name').update(table_object).where('id', id).returning('*');
            //.then(record => record[0])  
            //Do I need the above when the same thing is basically in the router.put?
    },
    delete(id){
        return database('table_name').del().where('id', id);
    }
};

//OR, from group-project:

// const database = require("./database-connection")

// module.exports = {
//     list(tableName) {
//         return database(tableName).select()
//     },
//     read(tableName, id) {
//       return database(tableName).select().where('id', id)
//     },
//     post(tableName, newEvent) {
//       return database(tableName)
//         .insert(newEvent)
//         .returning('*')
//         .then(record => record[0])
//     },
//     update(tableName, id, newEvent) {
//       return database(tableName)
//         .update(newEvent)
//         .where('id', id)
//         .returning('*')
//         .then(record => record[0])
//     },
//     deleteOne(tableName, id) {
//       return database(tableName)
//         .delete()
//         .where('id', id)
//     }
// }