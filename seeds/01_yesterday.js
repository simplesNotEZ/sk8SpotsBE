
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
          image_url: 'https://i.ytimg.com/vi/-XJ_9tcg6Ow/maxresdefault.jpg',
          name: 'Union Hills Skatepark',
          country: 'United States',
          address: '5752 W Union Hills Dr, Glendale, AZ 85308',
          city: 'Glendale',
          state: 'Arizona',
          description: "Best skatepark in AZ. Mellow street bowl up front. Flowly middle bowl. Deep bowl in back with a roll-in."
        },
        {
          image_url: 'https://img1.10bestmedia.com/Images/Photos/316562/p-maxresdefault_54_990x660.jpg' ,
          name: 'Denver Skatepark',
          country: 'United States',
          address: '2205 19th St, Denver, CO 80202',
          city: 'Denver',
          state: 'Colorado',
          description: "Boasting 60,000 square feet of skateable, concrete terrain, the park challenges boarders, bladers, and bikers of all levels (bring your own gear - no rentals available.) Pegs are not allowed on bicycles. Admission is free and the park is open seven days a week."
        },
        {
          image_url: 'http://northwestskater.com/winterparkco1787B72916.jpg',
          name: 'Hideaway Skatepark',
          country: 'United States',
          address: 'Idlewild Rd. and Hwy 40, Winter Park, CO 80482',
          city: 'Winter Park',
          state: 'Colorado',
          description: "The Hideaway Park skate park was built in the summer of 2007 and made a great addition to Hideaway Park. The expansion was funded by a Great Outdoors Colorado grant and consists of 3 separate sections. The banks section, complete with “Twinkie” and “love seat,” has unlimited new options for all levels of users."
        },
        {
          image_url: 'https://www.glendaleaz.com/parksandrecreation/parksandfacilities/images/XCourtcompleteweb.jpg' ,
          name: 'X-Court Skatepark',
          country: 'United States',
          address: '6101 N 83rd Ave, Glendale, AZ 85303',
          city: 'Glendale',
          state: 'Arizona',
          description: "A no-fee, 26,000-square-foot, concrete multi-use (bikes, boards, blades) facility. Site Design Group, a leader in skate park design, created a facility that will provide challenges for skaters and bikers of photo mapvarious skill levels. The perfect balance of bowls, banks, transitions and street components make the design fun and wide open for both bikes and boards."
        },
        {
          image_url: 'http://northwestskater.com/tempe628bowl11307.jpg' ,
          name: 'Tempe Skatepark',
          country: 'United States',
          address: ' 8401 S Hardy Dr, Tempe, AZ 85284',
          city: 'Tempe',
          state: 'Arizona',
          description: "The Valley is home to plenty of skate spots, but Tempe Skate Park, opened in 2005 as part of the Tempe Sports Complex, tops our list as a must-ride destination. The park features two levels and about 32,000 square feet of skatable space. The top level is a technical skater's dream, featuring stairs, rail ledges, a picnic table and a perfectly angled wall. The second level has one of the best (read: fastest) flow bowls in the state."
        },
        {
          image_url: 'http://www.coskate.com/images/skateparks/colorado/greenwood/greenwood-bg-02.jpg' ,
          name: 'William McKinley Carson Skatepark / Greenwood Village Skatepark',
          country: 'United States',
          address: '6000 S Quebec St, Greenwood Village, CO 80111',
          city: 'Greenwood Village',
          state: 'Colorado',
          description: "Nestled up in some Denver Tech Center buildings, this lil park is a gem.  It's one big flow-bowl with mello tranny up top.  Down below, the flow feeds into some deep pocket bowls.  I love the little spine they have there, and the many places to work on lip-manuevers."
        },
        {
          image_url: 'https://i.vimeocdn.com/video/507336453_780x439.jpg' ,
          name: 'The Wedge',
          country: 'United States',
          address: '7650 E. McDowell Road, Scottsdale, AZ 85257',
          city: 'Scottsdale',
          state: 'Arizona',
          description: "The Wedge Skate Park is located in Eldorado Park. It is a 20,000 square feet facility that has a Fun Box, Amoeba Bowl, Launch Box, Quarter-Pipe, Pyramid, curbs, and rails."
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE yesterday_id_seq RESTART WITH 11;");
    });
};
