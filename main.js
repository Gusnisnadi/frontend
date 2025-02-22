import App from './App';
import './index.scss';

const app = new App();

document.querySelectorAll(".sidebar-button div").forEach(element => {
    element.addEventListener("click", function() {
        // Remove a class from all elements
        document.querySelectorAll(".sidebar-button div").forEach(el => {
            el.classList.remove("active");
        });

        // Add a class to the clicked element
        this.classList.add("active");
    });
});