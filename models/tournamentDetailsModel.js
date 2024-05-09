const tournamentSchema = require("../Schemas/tournamentDetailsSchema")


class tournamentDetails{
  async sendTournamentDetails(date,time) {
    let tournamentData = new  tournamentSchema({
      date: date,
      time :time.toString()
    })

    try {
      let response = await tournamentData.save();
      return {
        message: "Tournament Details sent successfully",
        response : response,
      };
    } catch (error) {
      return error
    }

  }

  async deteleExistingTournaments() {
    try {
      let response = await tournamentSchema.deleteMany({});
      return "Existing Tournament Details deleted successfully";
    } catch (error) {
      return error;
    }
  }

  async getTournamentDetails() {
    try {
      let response = await tournamentSchema.find({});
      console.log(response)
      return response;
    } catch (error) {
      return error;
    }
  }
}

module.exports = tournamentDetails;