document.addEventListener('DOMContentLoaded', function () {
    const year = document.getElementById("year");
    if (year) {
        const thisYear = new Date().getFullYear();
        year.setAttribute("datetime", thisYear);
        year.textContent = thisYear;
    } else {
        console.error("Year element not found!");
    }
});
