const { Event, EventInfo } = require("../models/models");
const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");

class EventController {
  async create(req, res, next) {
    try {
      const { name, long, lat, info } = req.body;
      const desc = req.body.desc ? req.body.desc : null;
      const time = req.body.time ? req.body.time : null;

      const createEvent = async (info) => {
        await Event.create(info);
      };

      if (req.files) {
        const { img } = req.files;
        let filename = uuid.v4() + ".jpg";
        img.mv(path.resolve(__dirname, "..", "static", filename));
        createEvent({
          eventId: uuid.v4(),
          name,
          long,
          lat,
          img: filename,
          desc,
          time,
        });
      } else {
        createEvent({ eventId: uuid.v4(), name, long, lat, desc, time });
      }

      // const event = await Event.create({ name, long, lat, img: filename});

      if (info) {
        info = JSON.parse(info);
        EventInfo.create({
          desc: info.desc,
          time: info.time,
          eventId: createEvent.id,
        });
        // info.forEach((i) =>
        //   EventInfo.create({
        //     desc: i.desc,
        //     time: i.time,
        //     eventId: event.id,
        //   })
        // );

        // if (req.files) {
        //   const { img } = req.files;

        //   let filename = uuid.v4() + ".jpg";
        //   img.mv(path.resolve(__dirname, "..", "static", filename));
        //   event.img = filename;

        //   await event.save({ fields: ["img"] });
        // }
      }

      res.send("event created");
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const events = await Event.findAll();
    return res.json(events);
  }

  async getOne(req, res, next) {
    const { id } = req.params;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }

    const event = await Event.findOne({
      where: { eventId: id },
      // include: [{ model: EventInfo, as: "info" }],
    });
    return res.json(event);
  }
}

module.exports = new EventController();
