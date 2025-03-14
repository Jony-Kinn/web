document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".hero h1");
    let messages = [
        "Explore Our New Data Recovery Tools!",
        "Join Our Electronic Recycling Initiative!",
        "Subscribe to Our Monthly Plans Today!"
    ];
    let index = 0;

    function changeMessage() {
        banner.textContent = messages[index];
        index = (index + 1) % messages.length;
    }

    setInterval(changeMessage, 3000); // Change message every 3 seconds
});
