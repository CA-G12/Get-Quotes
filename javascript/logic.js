// ? Create a function that takes an array and return (length) of objects of this array
const truncate = (array, length) => {
  return array.slice(0, length);
};

if (typeof module !== "undefined") {
  module.exports = truncate;
}
