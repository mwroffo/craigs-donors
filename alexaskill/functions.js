const myfunctions = {
  getNGO: function(nonprofits_purpose, nonprofits) {
    console.log("Getting into geNGOFunction");
  
 
// Get an random non profits if its not defined
    if (nonprofits === undefined) {
      var totalngo = Object.keys(nonprofits_purpose).length;
      var rand = Math.floor(Math.random() * totalngo);
 
      // random Non profit name
      nonprofits = Object.keys(nonprofits_purpose)[rand];
    }
 
    console.log("The non profit is --> " + nonprofits + " <-- note the case and spaces");
 
    // check if Non profit exists and it has a name
    switch (nonprofits) {
      case "thelark":
        nonprofits = "thelark";
        break;
      case "ahrcnewyorkcityfoundation":
        nonprofits = "ahrcnewyorkcityfoundation";
        break;
      case "equaljusticeamerica":
        nonprofits = "equaljusticeamerica";
        break;
      case "nonprofitslist":
        nonprofits = "nonprofitslist";
        break;
      default:
        nonprofits = "Unknown";
    }
 

    let purpose = nonprofits_purpose[nonprofits];
    purpose = purpose.join(", and <break time=\"1s\"/> ");
 
    
    if (!purpose || nonprofits === "Unknown") { return false; }
 
    // return both the ngo name and the purpose as an array
    return [nonprofits,purpose];
  }
  
};

module.exports = myfunctions;