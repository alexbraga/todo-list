//jshint esversion:6

const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGO_ATLAS_URI
);

// DEFAULT LIST
const itemsSchema = new mongoose.Schema({
  name: String,
});

const Item = new mongoose.model("Item", itemsSchema);

const item01 = new Item({
  name: "Welcome to your todo list!",
});

const item02 = new Item({
  name: "Hit the + button to add a new item.",
});

const item03 = new Item({
  name: "<-- Hit this to delete an item.",
});

const defaultItems = [item01, item02, item03];

// CUSTOM LIST
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema],
});

const List = new mongoose.model("List", listSchema);

app.get("/", function (req, res) {
  Item.find({}, function (err, items) {
    if (items.length === 0) {
      Item.insertMany(defaultItems, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully saved");
        }
      });

      res.redirect("/");
    } else {
      res.render("list", { listTitle: "Today", newListItems: items });
    }
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName,
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    List.findOne({name: listName}, (err, foundList) => {
      foundList.items.push(item);
      foundList.save();
    });

    res.redirect("/" + listName);
  }
});

app.post("/delete", function (req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully deleted");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, (err, foundList) => {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }
});

app.get("/:customList", function (req, res) {
  const listTitle = _.capitalize(req.params.customList);

  List.findOne ({name: listTitle}, (err, foundList) => {
    if (!err) {
      if (!foundList) {
        const list = new List({
          name: listTitle,
          items: defaultItems,
        });

        list.save();
        res.redirect("/" + listTitle);
      } else {
        res.render("list", { listTitle: foundList.name, listItems: foundList.items });
      }
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started succesfully");
});
