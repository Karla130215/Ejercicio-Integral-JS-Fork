import { navBar } from "./navbar.js";
import { countLikes } from "./likes.js";
import { showDetails } from "./prodDescription.js";
import { changeAvailability } from "./availability.js";

document.addEventListener("DOMContentLoaded", () => {
    // Aquí voy a mandar a llamar a mis funciones
    navBar();
    countLikes();
    showDetails();
    changeAvailability();
});