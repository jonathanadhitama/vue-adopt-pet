export default {
  appendPet: (state, { species, pet }) => {
    state = Object.assign(state, {
      [species]: [...state[species], { ...pet }]
    });
  }
};
