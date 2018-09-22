const database = require("./database-connection");

module.exports = {
    list(tableName){
        console.log("list query running.");
        return database(tableName);
    },
    read(tableName, id){
        return database(tableName).where('id', id).returning('*')
            .then(record => record[0])
    },
    post(tableName, table_object){
        console.log("post query running");
        return database(tableName).insert(table_object).returning('*')
            .then(record => record[0]);
    },
    update(id, table_object){
        return database('table_name').update(table_object).where('id', id).returning('*');
            //.then(record => record[0]); 
            //Do I need the above when the same thing is basically in the router.put?
    },
    delete(tableName, id){
        console.log("the id passed to queries.delete: ", id);
        return database(tableName).del().where('id', id);
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