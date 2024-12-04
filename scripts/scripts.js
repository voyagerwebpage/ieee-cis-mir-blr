document.addEventListener("DOMContentLoaded", () => {
    loadEvents();
    loadMembers();
    loadAboutSection(); 
});

function loadEvents() {
    fetch("data/events.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch events data.");
            }
            return response.json();
        })
        .then((events) => {
            const eventsContainer = document.querySelector(".events-container");
            events.forEach((event) => {
                const eventCard = document.createElement("div");
                eventCard.className = "event-card";

                eventCard.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <a href="${event.link}" target="_blank">Read More</a>
                    </div>
                `;

                eventsContainer.appendChild(eventCard);
            });
        })
        .catch((error) => {
            console.error("Error loading events:", error);
            document.querySelector(".events-container").innerHTML = 
                "<p>Failed to load events. Please try again later.</p>";
        });
}

function loadMembers() {
    fetch("data/members.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch members data.");
            }
            return response.json();
        })
        .then((members) => {
            const membersContainer = document.querySelector(".members-container");
            members.forEach((member) => {
                const memberCard = document.createElement("div");
                memberCard.className = "member-card";

                memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" class="member-photo">
                    <div class="member-info">
                        <h3 class="member-name">${member.name}</h3>
                        <a href="mailto:${member.email}" class="member-email">${member.email}</a>
                    </div>
                `;
                
                // to add designation if required for the future
                //<p class="member-designation">${member.designation}</p>

                membersContainer.appendChild(memberCard);
            });
        })
        .catch((error) => {
            console.error("Error loading members:", error);
            document.querySelector(".members-container").innerHTML = 
                "<p>Failed to load members. Please try again later.</p>";
        });
}

