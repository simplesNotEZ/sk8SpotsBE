
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('yesterday').del()
    .then(function () {
      // Inserts seed entries
      return knex('yesterday').insert([
        {
          image_url: 'http://www.denver-realestateonline.com/wp-content/uploads/redstone-park-highlands-ranch.jpg' ,
          name: 'Redstone Skatepark',
          country: 'United States',
          address: '3280 Redstone Park Cir, Highlands Ranch, CO 80129',
          city: 'Highlands Ranch',
          state: 'Colorado',
          description: "Rad mini-bowl. Best snake-run I've skated."
        },
        {
          image_url: 'http://skatepark.com/images/park_images/1171822919.jpg',
          name: 'Pecos Skatepark',
          country: 'United States',
          address: '17010 S 48th St, Phoenix, AZ 85048',
          city: 'Phoenix',
          state: 'Arizona',
          description: "Super flowy. Good pocket bowls. Transition's rather mellow."
        },
        {
          image_url: 'https://i.ytimg.com/vi/AjqBhMbmo0k/maxresdefault.jpg',
          name: 'Arvada Skatepark / Apex Park',
          country: 'United States',
          address: '12920 W 72nd Ave, Arvada, CO 80005',
          city: 'Arvada',
          state: 'CO',
          description: "Huge. Something for everyone. The nipple bowl has pretty chill transition. Second best snake-run I've skated."
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        },
        {
          image_url: '' ,
          name: '',
          country: 'United States',
          address: '',
          city: '',
          state: '',
          description: ""
        }
      ]);
    });
};
