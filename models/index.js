// Define global variables
const User = require('./User');
const Item = require('./Item');
const Schedule = require('./Schedule');

// Define associations
User.hasMany(Item, {
    foreignKey: 'user_id'
});

Item.belongsTo(User, {
    foreignKey: 'user_id'
});

Item.hasMany(Schedule, {
    foreignKey: 'item_id'
});

Schedule.belongsTo(Item, {
    foreignKey: 'item_id'
});

// Export variables
module.exports = { User, Item, Schedule };
