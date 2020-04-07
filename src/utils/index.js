// const { log } = console;
const { floor, random } = Math;

export const rand = (collection, len = collection.length) => {
  return collection[floor(random() * len)];
};
