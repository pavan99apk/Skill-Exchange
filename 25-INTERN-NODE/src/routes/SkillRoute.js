const express = require("express");
const skillController = require("../controllers/SkillController");

const router = express.Router();

router.get("/skills", skillController.getAllSkills);
router.get("/count", skillController.getAllSkills);
router.post("/skill", skillController.addSkill);
router.delete("/:id", skillController.deleteSkill);

module.exports = router;
