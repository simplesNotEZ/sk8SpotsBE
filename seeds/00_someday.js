
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('someday').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
        {
          image_url:  ,
          name:  ,
          country: ,
          address: ,
          city: ,
          state: ,
          description:
        },
      ]);
    });
};
