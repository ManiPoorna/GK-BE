const express = require('express');
const tournamentDetailsSchema = require("../Schemas/tournamentDetailsSchema")
const tournamentDetails = require('../models/tournamentDetailsModel');
const tournamentDetailsRouter = express.Router();
let tournamentInstance = new tournamentDetails();


tournamentDetailsRouter.post("/post-tournament-details", async (req, res) => {
  let date = req.body.date
  let time = req.body.time
  try {
    let response = await tournamentInstance.sendTournamentDetails(date, time);
    return res.status(201).send({
      response: response,
      status: 201,
    })
  } catch (error) {
    return res.send({
      error,
      status: 500,
    })
  }
})


tournamentDetailsRouter.delete("/detele-existing-tournament-details", async (req, res) => { 
  try {
    let response = await tournamentInstance.deteleExistingTournaments();
    res.send({
      message : response,
      status: 202,
    })
  } catch (error) {
    return res.send({
      error,
      status: 500,
    })
  }
})

tournamentDetailsRouter.get("/get-tournament-details", async (req, res) => { 
  try {
    let response = await tournamentInstance.getTournamentDetails();
    return res.status(200).send({
      response : response,
      status: 200,
    })
  } catch (error) {
    return res.send({
      error,
      status: 500,
    })
  }
})


module.exports = tournamentDetailsRouter