const sequelize = require("../db");

const { DataTypes } = require("sequelize");

// const User = sequelize.define("user", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   email: { type: DataTypes.STRING, unique: true },
//   password: { type: DataTypes.STRING },
//   name: { type: DataTypes.STRING, unique: true },
// });

const Event = sequelize.define("event", {
  eventId: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING },
  long: { type: DataTypes.INTEGER, allowNull: false },
  lat: { type: DataTypes.INTEGER, allowNull: false },
  img: { type: DataTypes.STRING },
  desc: { type: DataTypes.STRING },
  time: { type: DataTypes.INTEGER },
});

// const EventInfo = sequelize.define("event_info", {
//   eventInfoId: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//   },
//   desc: { type: DataTypes.STRING },
//   time: { type: DataTypes.INTEGER },
// });

// Event.hasOne(EventInfo);
// EventInfo.belongsTo(Event);

module.exports = {
  Event,
};
