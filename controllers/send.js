const Form = require("../models/Form");

const sendForm = async (req, res) => {
  try {
    const sendForm = await Form.create(req.body);
    res.status(200).json(sendForm);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllForms = async (req, res) => {
  try {
    const allForm = await Form.find({});
    res.status(200).json(allForm);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  sendForm,
  getAllForms,
};
