import { common } from "./routes/common"
import { home } from "./routes/home"

// Get which template is in use
const template = document.body.dataset.template;

window.onload = () => {

    // Modules loaded on every page
    common();

    // Load modules per template
    switch (template) {
        case "home":
            home();
    }

}