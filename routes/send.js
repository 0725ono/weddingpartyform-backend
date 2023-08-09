const router = require("express").Router();

const {
    sendForm,
    getAllForms,
} = require("../controllers/send");

router.post("/", sendForm);
router.get("/", getAllForms);


module.exports = router;