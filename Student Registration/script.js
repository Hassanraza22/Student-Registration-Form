// Check if user is logged in
const isLoggedIn = true; // Change to true if user is logged in

window.onload = function() {
    const navbar = document.getElementById('navbar');
    const profileLink = document.createElement('li');
    profileLink.innerHTML = '<a href="profile.html">Profile</a>';
    const settingsLink = document.createElement('li');
    settingsLink.innerHTML = '<a href="settings.html">Settings</a>';
    const dashboardLink = document.createElement('li');
    dashboardLink.innerHTML = '<a href="dashboard.html">Dashboard</a>';
    const logoutLink = document.createElement('li');
    logoutLink.innerHTML = '<a href="logout.html">Logout</a>';

    if (isLoggedIn) {
        navbar.appendChild(profileLink);
        navbar.appendChild(settingsLink);
        navbar.appendChild(dashboardLink);
        navbar.appendChild(logoutLink);
    }
};
