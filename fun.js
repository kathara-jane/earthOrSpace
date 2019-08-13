const prompt = require("prompt-sync")();

let lives = 1;

const domesticMessages = {
  hawaii: "wooot! you spun the globe and boop you landed on hawaii! lucky you! you're whisked away to the land of poke and volcanoes and beautiful mountains and beaches! There's no beating that, play again for a new adventure!",
  roadTrip: "You decide that traveling to one place is lame af and instead decide to road trip around the continental US and visit all 58 national parks! Damn son!",
  florida: "You choose to make like the snowbirds and head for sunny liberal Saint Petersburg Florida. You bask in the sunshine and drink margs on the beach, play again for a new adventure!",
  alaska:  "You wake up one sweltering August morning in the concrete jungle and hear the call of the wild. Alaska you go! On your way you see a moose, a bear, and the northern lights. Play again for a new adventure",
  newJersey: "You decide to move to suburban New Jersey but as you're on the Jersey Turnpike you get sucked into a black hole in Elizabeth! Oh no! Play again for a new outcome!",
}

const internationalMessages = {
  ireland: "You decide to go to Ireland! As you were walking down the cliffs of Moher a big gust of wind came by and you fell! Oh no!!",
  thailand: "You decide to go to Thailand and you eat sticky rice and see the Emerald Buddha temple",
  peru: "You chose to visit the beautiful land of Peru, you pet an Alpaca and climbed 2139 feet to see Machu Picchu! Youve decided to pack your bags and stay here with the alpacas forever! Play again for a new adventure",
  southAfrica: "You go to South Africa and have a grand old time! Play again for a new adventure",
  newZealand: "You spin the map and land on New Zealand! Lucky for you you have a friend who lives there and she shows you around Hobbiton, and you even go spelunking! What a trip! Play again for a new adventure",
}

const exploreMessages = {
  blackHole: "Oh no! You got sucked into a supermassive black hole! Wow what a way to go! Play again for a new wild adventure!",
  explorer: "Houston we don't have a problem! You've decided to live on a satellite that orbits earth as a mechanic. What a gig you landed! Your bones lose density and you grow accustomed to a silence like no other, but you enjoy your new lifestyle and the views arent so bad!",
}

const planetMessages = {
  mars: "You work hard with the folks at Nasa and decide to ship out to Mars. You're part of the team of first colonizers and one of the first humans to find water. Play again for a new adventure",
  moon: "Congratulations! You've been accepted into a program that will take you to unchartered territory with the goal of finding a new planet for humans to inhabit. On your journey you find signs of life elsewhere and spend the rest of your life trying to figure out how to contact this species!",
  jupiter: "You embark on the six year journey to Jupiter, you're in for a long but well worth it wait! On your way you see the beauties of Mars and the vast expanse of the stars",
}

const startGame = () => {
  //check for lives!
  if (lives === 0) {
    console.log("oh no you lost the game!");
    return;
  }
  
  console.log("================================")
  console.log(
    "hello and welcome! you just won a million dollars and now you get to choose an adventure!"
  );
  console.log(`You have ${lives} life to live!`);
  console.log("================================");
  console.log();

  earthSpace();
};

const earthSpace = () => {
  let earthOrSpace = prompt(
    "Do you want to travel earth or space? [earth/space]"
  );
  if (earthOrSpace === "earth") {
    chooseEarth();
  } else if (earthOrSpace === "space") {
    chooseSpace();
  }
};

const chooseEarth = () => {
  let choseEarth = prompt(
    "yay! you chose to explore the Earth, would you like to travel domestic or international?[domestic/international]"
  );

  if (choseEarth === "domestic") {
    console.log(randomDomestic());
  } else if (choseEarth === "international") {
    console.log(randomInternational())
  } else {
    console.log('something else')
  }
};

const chooseSpace = () => {
  let choseSpace = prompt(
    "yay! you chose to explore space! Would you like to explore new territory or go to one of the planets? [new/planet]"
  );
  if (choseSpace === "new") {
    console.log(randomExploration());
  } else if (choseSpace === "planet") {
    console.log(randomPlanet());
  }
};

const randomPlanet = () => {
  const locations = Object.keys(planetMessages)
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  if (randomLocation === "moon") {
    lives = lives -1
  }
  return planetMessages[randomLocation]
};

const randomExploration = () => {
  const locations = Object.keys(exploreMessages)
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  if (randomLocation === "blackHole") {
    lives = lives - 1
  }
  return exploreMessages[randomLocation];
};



const randomDomestic = () => {
  const domesticLocations = ['hawaii', 'roadTrip', 'florida', 'alaska', 'newJersey'];
  const randomLocation = domesticLocations[
    Math.floor(Math.random() * domesticLocations.length)
  ];

  if(randomLocation === "newJersey") {
    lives = lives - 1
  }

  return domesticMessages[randomLocation];
};

const randomInternational = () => {
  const locations = Object.keys(internationalMessages);
  const randomLocation = locations[
    Math.floor(Math.random() * locations.length)
  ];

  if (randomLocation === "ireland") {
    lives = lives -1
  }
  return internationalMessages[randomLocation];
};
startGame();