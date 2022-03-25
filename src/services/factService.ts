export const catFacts = [
  `Believe it or not, cats can dream.`,
  `Fun fact, cats have an extra organ that allows them to taste scents in the air.`,
  `Did you know that each cat's nose is unique? it's much like human fingerprints.`,
  `Did you know that cats can run around 48 kph (30 mph), but only over short distances? A house cat could beat superstar runner Usain Bolt in the 200 meter dash.`,
  `Here's a fact. An adult cat's brain is approximately 5 cm (2 inches) long and weighs about 30g and has nearly twice the amount of neurons in their cerebral cortex than dogs.`,
];

export const dogFacts = [
  `Your blood pressure can go down when petting a dog, and so does the dog's..`,
  `Fun fact, a group of pugs is called a "grumble".`,
  `Like a superpower, dog's eyes contain a special membrane called the tapetum lucidum. It allows them to see in the dark.`,
  `Did you know that dogs can smell about 1,000-10,000 times better than humans? While humans have 5 million smell-detecting cells, dogs have more than 220 million. The part of the brain that interprets smell is also four times larger in dogs than in humans.`,
  `Jeez! it costs approximately $10,000 to train a dog for federally certified search and rescue.`,
];

export function pickRandomCatFact() {
  return pickRandomFact(catFacts);
}

export function pickRandomDogFact() {
  return pickRandomFact(dogFacts);
}

function pickRandomFact(facts) {
  return facts[Math.floor(Math.random() * facts.length)];
}
