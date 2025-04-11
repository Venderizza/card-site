import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

$(document).ready(function () {
    const slider = $("#slider").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: false,
    });
});