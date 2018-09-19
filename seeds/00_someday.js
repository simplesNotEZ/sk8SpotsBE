
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('someday').del()
    .then(function () {
      // Inserts seed entries
      return knex('someday').insert([
        {
          image_url:'https://i.ytimg.com/vi/yfoD24rLiNQ/maxresdefault.jpg' ,
          name: 'Burnside Skatepark',
          country: 'United States',
          address: 'SE 2nd Ave, Portland, OR 97232',
          city: 'Portland',
          state: 'Oregon',
          description: "Burnside Skatepark is located under the east end of the Burnside Bridge. The skatepark was originally built by the skateboard community without permission and eventually the city approved the area as a public skatepark. The skatepark has been featured in videogames such as Tony Hawk's Pro Skater, Tony Hawk's Pro Skater 2X, Tony Hawk's Pro Skater 3, Mat Hoffman's Pro BMX, and Grind Session. Burnside Skatepark was also featured in the 1993 film Free Willy and the 2007 film Paranoid Park, as a setting for the eponymous skate park."
        },
        {
          image_url:'http://www.fise.fr/sites/default/files/ressources/black-pearl-web.jpg',
          name: 'The Black Pearl',
          country: 'Cayman Islands',
          address: 'Grand Harbour, Red Bay, KY1-1201',
          city: 'Grand Harbour',
          state: 'Red Bay, KY1-1201',
          description:"Black Pearl is the largest skate park in the Western Hemisphere & second in world featuring courses for beginner, intermediate & expert skaters."
        },
        {
          image_url: 'https://i.ytimg.com/vi/f3GxQjbZy7g/maxresdefault.jpg',
          name: 'Kona Skatepark',
          country: 'United States',
          address: '8739 Kona Ave, Jacksonville, FL 32211',
          city: 'Jacksonville',
          state: 'Florida',
          description: "Located in Jacksonville, Florida, Kona is the world's oldest skatepark offering daily admission, lessons, camps, events and more!"
        },
        {
          image_url: 'https://www.skateboard.com.au/images/guangzhouuni1.jpg'  ,
          name: 'Guangzhou Skatepark',
          country: 'China',
          address: '18 Neihuan Dong Lu, Guangzhou Higher Education Mega Centre, Panyu District',
          city: 'Panyu District',
          state: 'Panyu District',
          description: "Officially the largest skatepark in the world.  The monstrous skatepark's construction site is surrounded by 10 universities, with a combined attendance of more than 160,000 students. The skatepark is part of an extreme sports complex that will also house a BMX park and a climbing wall."
        },
        {
          image_url: 'http://www.galuxsee.com/wp-content/uploads/2016/05/Indian-School-Ditch-20160508-Instagram-User-tonyhawk-Map.jpg',
          name: 'Indian School Ditch' ,
          country: 'United States',
          address: '12500 Morrow Ave NE Albuquerque, NM 87112',
          city: 'Albuquerque',
          state: 'New Mexico',
          description: "The indian school in Alb is very easy to get to. Take I40 east from the I25-I40 interchange. Go to Juan Tabo get off and go North (left)  a couple of miles and look for Indian School. You can't miss the ditch. It is illegal to skate it."
        },
        {
          image_url: 'http://patineta.net/wp-content/uploads/2017/03/IMG_9583.jpg',
          name: 'Los Reyes Skatepark' ,
          country: 'Chile',
          address: 'H8CJ+GC Santiago, Chile',
          city: 'Santiago',
          state: 'Región Metropolitana',
          description: "The biggest skatepark in Chile, Skatepark Los Reyes is situated on the banks of the Machopo River. It is one of the most scenic parks in the world. It has enough bits to keep you busy for days, plus lights for night skates in the Chilean summer."
        },
        {
          image_url: 'https://ggrahouston.com/wp-content/uploads/2017/03/Spring-Skatepark3.jpg',
          name: 'Spring Skatepark',
          country: 'United States',
          address: '12351 Kuykendahl Rd, Houston, TX 77090',
          city: 'Houston',
          state: 'Texas',
          description: 'This competition-scale park features 10 acres of bowls, pipes, ramps & street-skating obstacles. With its 78,000 square feet of skate surface, the admission-free Spring Skatepark on Kuykendahl is one of the largest in the world. It was designed by the Seattle firm Grindline.'
        },
        {
          image_url: 'http://www.fise.fr/sites/default/files/ressources/le-bowl-web.jpg',
          name: 'Le Bowl Skatepark',
          country: 'France',
          address: '197 avenue Pierre Mendès, 13008 Marseille, France',
          city: 'Marseille',
          state: 'France',
          description: "France’s largest outdoor skatepark.  It’s a must-stop for skaters travelling through Europe – it has deep bowls, multiple vert ramps and awesome graffiti.  Le Bowl attracts a high caliber of skating talent."
        },
        {
          image_url: 'http://www.midasconstructionuk.com/gallery/Brighton-01-lrg.jpg',
          name: 'The Level Skatepark',
          country: 'United Kingdom',
          address: 'Brighton BN2 9SY, UK',
          city: 'Brighton',
          state: 'Brighton',
          description: "Completely refurbished by Freestyle, the Level Skate Park is a 1,400m sq. polished concrete park. Opened in June 2013 it’s now the centre of the skate scene in Brighton and for good reason. The Level Skate Park itself sits on a triangular site and has both a plaza style street section and a transition area."
        },
        {
          image_url: 'http://www.coskate.com/images/skateparks/colorado/trinidad/trinidad-bg-04.jpg',
          name: 'Trinidad Skatepark' ,
          country: 'United States',
          address: 'Beshoar Ave, Trinidad, CO 81082',
          city: 'Trinidad',
          state: 'Colorado',
          description: "Built in 2003, the 15,000 square foot, state-of-the-art Trinidad Skate Park is one of the top ten public skateboarding parks in the world."
        },
        {
          image_url: 'http://californiaskateparks.com/wp-content/uploads/2015/01/vansoffthewall_DSC8757skatepark-.jpg',
          name: "Van's OFF THE WALL Skatepark" ,
          country: 'United States',
          address: '7471 Center Ave, Huntington Beach, CA 92647',
          city: 'Huntington Beach',
          state: 'California',
          description: "As required by California law, all participants will be allowed to enter or remain in the Vans Skatepark (the “Park”) if they are wearing full protective gear, including, but not limited to, a helmet and hard-shell elbow and knee pads. Helmets must be buckled at all times while in the Park. Participants over the age of 18 may opt to wear only a helmet and no knee or elbow pads."
        }
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE someday_id_seq RESTART WITH 12;");
    });
};
