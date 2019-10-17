const fs = require("fs");

const GoogleMapsPlaceCrawler = require("./index");

GoogleMapsPlaceCrawler.logging = true;

GoogleMapsPlaceCrawler.city("London").then(data => {
  // do something with data
  console.log("\nRESULTS:\n");
  console.log(data);
  console.log(`\nFound ${Object.keys(data).length} places\n`);
  fs.writeFileSync("./Place-data.json", JSON.stringify(data, null, 4), "utf8");
  console.log(`\nResult written to ${__dirname}/Place-data.json.`);
});
