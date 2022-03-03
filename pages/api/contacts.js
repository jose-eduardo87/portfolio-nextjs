import dbConnect from "lib/dbConnect";
import Contact from "models/Contact";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const contacts = await Contact.find();

        return res.status(200).json({ success: true, data: contacts });
      } catch (err) {
        return res
          .status(400)
          .json({ success: false, message: "Something went wrong!" });
      }

      break;

    case "POST":
      try {
        const { name, email, message } = req.body;
        const contact = await Contact.create({ name, email, message });

        return res.status(201).json({ success: true, data: contact });
      } catch (err) {
        return res.status(400).json({
          success: false,
          message:
            "Your message could not be sent. I am aware of the situation and will manage the problem as soon as I can. Please try again later and sorry for any inconvenience.",
        });
      }

      break;
  }
}
