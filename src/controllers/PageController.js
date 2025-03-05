export const home = (req, res) => {
    res.render("home", {
        title: "Dinosaurs around the world",
        message: "Welcome to the world of dinosaurs"
    });
};

export const about = (req, res) => {
    res.render("about", {
        title: "about us",
        message: "Welcome to the world of dinosaurs"
    });
}

export const contact = (req, res) => {
    res.render("contact", {
        title: "Contact us",
        message: "Welcome to the world of dinosaurs"
    });
}

export const privacy = (req, res) => {
    res.render("privacy", {
        title: "Dinosaurs around the world",
        message: "Welcome to the world of dinosaurs"
    });
}