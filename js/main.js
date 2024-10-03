; (function () {

    'use strict';

    // FAQ button plus minus
    const containerItemHeaders = document.querySelectorAll(".faq-container-item-header");

    containerItemHeaders.forEach(containerItemHeader => {
        containerItemHeader.addEventListener("click", event => {

            // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

            const currentlyActiveContainerItemHeader = document.querySelector(".faq-container-item-header.active");
            if (currentlyActiveContainerItemHeader && currentlyActiveContainerItemHeader !== containerItemHeader) {
                currentlyActiveContainerItemHeader.classList.toggle("active");
                currentlyActiveContainerItemHeader.nextElementSibling.style.maxHeight = 0;

            }

            containerItemHeader.classList.toggle("active");
            const containerItemBody = containerItemHeader.nextElementSibling;
            if (containerItemHeader.classList.contains("active")) {
                containerItemBody.style.maxHeight = containerItemBody.scrollHeight + "px";
            }
            else {
                containerItemBody.style.maxHeight = 0;

            }

        });
    });


}());

