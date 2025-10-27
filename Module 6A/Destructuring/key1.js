const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
console.log(createPerson("kamla", 20, "female"));

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(48);
console.log(bicycle.gear);



