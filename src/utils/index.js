const { floor, random } = Math;

export function rand(collection, len = collection.length) {
  return collection[floor(random() * len)];
}

export function lowercase(str = '') {
  return str.toLowerCase();
}

export function uppercase(str = '') {
  return str.toUpperCase();
}

export function capitalize(str = '') {
  return str.charAt(0).toUpperCase() + lowercase(str.substring(1));
}
