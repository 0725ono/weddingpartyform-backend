const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  attendance: {
    type: String,
    // default: true,
  },
  name: {
    type: String,
    // required: [true, "名前を入力してください"],
  },
  postalcode: {
    type: String,
    // required: [true, "郵便番号を入力してください"]
  },
  address: {
    type: String,
    trim: true,
    // required: [true, "住所を入力してください"]
  },
  email: {
    type: String,
    // required: [true, "メールアドレスを入力してください"]
  },
  tel: {
    type: String,
  },
  allergy: {
    type: String,
    maxlength: [300, "アレルギー等については300文字以内で入力してください"],
  },
});

module.exports = mongoose.model("Form", FormSchema);
