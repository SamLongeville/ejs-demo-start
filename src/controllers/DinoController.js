import { navItems, dinosaurs } from "../data/data.js";

export const index = (req, res) => {
  // res.send("DinoController index");
  res.render("dinosaurs/index", {
    title: "Dinosaurs",
    navItems,
    dinosaurs,
  });
};

export const detail = (req, res) => {
  res.render("dinosaurs/detail", {
    navItems,
  });
};
