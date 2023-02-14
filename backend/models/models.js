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
  lat: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: 90,
      min: -90,
    },
  },
  img: { type: DataTypes.STRING },
  desc: { type: DataTypes.STRING },
  time: { type: DataTypes.STRING },
  date: { type: DataTypes.STRING },
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
