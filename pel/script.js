document.addEventListener("DOMContentLoaded", function() {
    // Show loader on page load
    const loader = document.querySelector(".loader-wrapper");

    // Hide loader after 5 seconds
    setTimeout(function() {
        loader.style.display = "none";
    }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ
});
