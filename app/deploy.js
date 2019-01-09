var ghpages = require("gh-pages");

ghpages.publish("dist", function(err) {
  console.log("Deploying...");
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully deployed");
  }
});
