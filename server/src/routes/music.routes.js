const express = require("express")
const multer = require("multer")
const router = express.Router()
const musicController = require("../controllers/music.controller")
const authMiddleware = require("../midlewares/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload", authMiddleware.authArtist, upload.single("music"), musicController.createMusic)
router.post("/album", authMiddleware.authArtist, musicController.createAlbum)
router.get("/", authMiddleware.authUser, musicController.getAllMusics)

module.exports = router