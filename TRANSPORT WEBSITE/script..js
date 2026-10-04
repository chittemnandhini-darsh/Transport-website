// Select a route

function selectRoute(route) {

    let parts = route.split(" - ");

    document.getElementById("from").value = parts[0];

    document.getElementById("to").value = parts[1];

    document.getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// Booking form

document.getElementById("bookingForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        let from =
            document.getElementById("from").value;

        let to =
            document.getElementById("to").value;

        let transport =
            document.getElementById("transport").value;

        let passengers =
            document.getElementById("passengers").value;

        document.getElementById("message").innerHTML =
            "Booking Successful! 🎉<br>" +
            "Thank you, " + name + ".<br>" +
            "Journey: " + from + " → " + to + "<br>" +
            "Transport: " + transport + "<br>" +
            "Passengers: " + passengers;

    });


// Search routes

function searchRoutes() {

    let search =
        document.getElementById("routeSearch")
        .value
        .toLowerCase();

    let routes =
        document.querySelectorAll(".route-card");

    routes.forEach(function(route) {

        let routeName =
            route.querySelector("h3")
            .textContent
            .toLowerCase();

        if (routeName.includes(search)) {

            route.style.display = "block";

        } else {

            route.style.display = "none";

        }

    });

}