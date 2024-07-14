import cron from "cron";
import https from "https";

const URL = "https://etracker-tsio.onrender.com/";

const job = new cron.CronJob("*/30****", () => {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("200 Get request");
      } else {
        console.log("500 request");
      }
    })
    .on("error", (e) => {
      console.log("Error while sending request", e);
    });
});

export default job;
