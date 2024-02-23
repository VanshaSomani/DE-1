const express = require('express')
const router = express.Router()
const promtController = require('../controllers/PromptController')

router.get("/img" , promtController.getImgPrompt);
router.get("/text" , promtController.getTextPrompt);

module.exports = router;