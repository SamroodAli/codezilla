const express = require("express")
const router = express.Router()

const Video = require("../models/Video")

router.get("/", async (req, res) => {
  const videos = await Video.find({})
  return res.status(200).json(videos)
})

router.post("/", async (req, res) => {
  console.log(req.body)
  res.status(201).json({message:"Videos Added"})
})