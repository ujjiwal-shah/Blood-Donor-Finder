const donors = [
    { name: "Rahul Sharma", city: "Mumbai", state: "Maharashtra", contact: "1234567890" },
    { name: "Anita Kumar", city: "Bangalore", state: "Karnataka", contact: "9876543210" }
    // Add more donor data here
];

function findDonors() {
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;

    const filteredDonors = donors.filter(donor => donor.state === state && donor.city === city);

    if (filteredDonors.length > 0) {
        localStorage.setItem('donorData', JSON.stringify(filteredDonors));
        window.location.href = 'results.html';
    } else {
        alert("No donors found.");
    }
}
