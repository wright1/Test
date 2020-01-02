let TreeNode = class TreeNode {
  constructor(value, id) {
    this.id = id;
    this.value = value;
    this.descendents = ["", "", "", ""];
  }
};
const treeSearch = (array, id) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) {
      return array[i];
    } else if (array[i].descendents) {
      const result = treeSearch(array[i].descendents, id);
      // return the result only if it's actually found otherwise keep looping
      if (result) return result;
    }
  }
};

module.exports = {
  TreeNode,
  treeSearch
};
