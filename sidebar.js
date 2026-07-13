<<<<<<< HEAD
fetch("sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar").innerHTML = data;
    });
=======
document.addEventListener("DOMContentLoaded", () => {
    const sidebarContainer = document.getElementById("sidebar");

    if (!sidebarContainer) {
        return;
    }

    fetch("sidebar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Sidebar request failed: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            sidebarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error("Unable to load sidebar content:", error);
            sidebarContainer.innerHTML = '<div class="p-4 text-sm text-white">Sidebar content is unavailable right now.</div>';
        });
});
>>>>>>> 0d89b7f (Update certificates section and portfolio improvements)
