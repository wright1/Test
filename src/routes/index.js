const express = require("express");
const data = require("../model/data");
const router = express.Router();
// beginning of tree data storage
const root = new data.TreeNode("Once upon a time there was a big bad wolf", 1);

// this route serves the home page
router.get("/", (req, res) => {
  res.render("home", { layout: "main" });
});
// this route serves the 'back to beginning' link
router.get("/option/beginning", (req, res) => {
  res.render("opt1", {
    layout: "main",
    links: root.descendents
  });
});
// this route is served when a sentence (link) is selected
router.get("/option/:id", (req, res) => {
  console.log("this is the route")
  // the parent node to which the new node will need to be attached
  let id = req.url.split("-")[1];
  let parentId = id.substring(0, id.length - 1);
  console.log("parentId:",parentId)
  // the last number of id tells us node position in array
  let index = req.url.substr(-1);
  // find parentNode
  let parentNode = data.treeSearch(root.descendents, parentId);

  if (parentNode == undefined) {
    console.log("here",root.descendents[index] )
    res.render("newNode1", {
      text: root.descendents[index]
    });
  } else {
    console.log("pick:", parentNode)
    res.render("newNode1", {
      text: parentNode.descendents[index]
    });
  }
});
// this route is served when an option (input text) is submitted
router.post("/:option/:id", (req, res) => {
  let id = req.url.split("-")[1];
  let index = req.url.split("/")[1];
  let newId = id + index;
  // search for the node (sentence- headtext) by id
  let node = data.treeSearch(root.descendents, id);
  // create and attach child node to parent(the node we are on)
  node.descendents[index] = new data.TreeNode(req.body.userInput, newId);
  // treeSearch function doesn't work on first descendents
  if (newId < 20) {
    res.render("options", {
      node: root.descendents[index]
    });
  } else {
    res.render("options", {
      node: data.treeSearch(root.descendents, id)
    });
  }
});
// this route serves the very first submitted options
router.post("/:option", (req, res) => {
  let index = parseInt(req.params.option);
  let num = req.params.option;
  // add children to root node
  root.descendents[index] = new data.TreeNode(req.body[num], 1 + num);
  res.render("opt1", {
    links: root.descendents, // child array
    layout: "main"
  });
});
module.exports = router;
