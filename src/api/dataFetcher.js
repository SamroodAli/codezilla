import axios from 'axios';

(async () => {
  const reacts = await axios('/data/react.json');
  const react = reacts.data.items;
  const angulars = await axios('/data/angular.json');
  const angular = angulars.data.items;
  const vues = await axios('/data/vue.json');
  const vue = vues.data.items;
  const functionalprogrammings = await axios('/data/functionalprogramming.json');
  const functionalprogramming = functionalprogrammings.data.items;
  const jamstacks = await axios('/data/jamstack.json');
  const jamstack = jamstacks.data.items;
  const oops = await axios('/data/oop.json');
  const oop = oops.data.items;
  const microservices = await axios('/data/microservices.json');
  const microservice = microservices.data.items;
  const courses = {
    react,
    angular,
    functionalprogramming,
    oop,
    jamstack,
    vue,
    Microservices: microservices,
  };
  console.log(courses);
})();
