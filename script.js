document.addEventListener("DOMContentLoaded", () => {
    // Sample Data
    const santaData = {
        name: "Needra",
        recipient: "Keshan",
        wishlist: ["Perfume", "Wallet"]
    };

    // Dynamically update content
    document.getElementById("name").textContent = santaData.name;
    document.getElementById("santa-name").textContent = santaData.recipient;

    const wishlist = document.getElementById("wishlist");
    santaData.wishlist.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `🎁 ${item}`;
        wishlist.appendChild(listItem);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Snowflake generation
    const snowflakeContainer = document.getElementById("snowflakes");

    const createSnowflake = () => {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";

        // Random size, position, and duration
        const size = Math.random() * 10 + 5; // Size between 5px and 15px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duration between 2s and 5s
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Staggered start

        // Add snowflake to container
        snowflakeContainer.appendChild(snowflake);

        // Remove snowflake after animation
        setTimeout(() => {
            snowflake.remove();
        }, 5000); // Matches animation duration
    };

    // Create snowflakes at intervals
    setInterval(createSnowflake, 50); // New snowflake every 200ms
});
