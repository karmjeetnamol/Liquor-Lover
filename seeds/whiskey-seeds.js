const { Whiskey } = require('../models');

const whiskeyData = [
  {
    name: 'Garrison Brothers',
    type: 'Bourbon',
    created_at: new Date(),
    
  },
  {
    name: 'TX Whiskey',
    type: 'Bourbon',
    created_at: new Date(),
    
  },
  {
    name: 'Pappy Van Winkle',
    type: 'Bourbon',
    created_at: new Date(),
  
  },
 
];

const seedWhiskey = () => Whiskey.bulkCreate(whiskeyData);

module.exports = seedWhiskey;