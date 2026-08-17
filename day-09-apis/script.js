const userIdInput = document.getElementById("userId");
const fetchBtn = document.getElementById("fetchBtn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const userResult = document.getElementById("userResult");
const postBtn = document.getElementById("postBtn");
const errorBtn = document.getElementById("errorBtn");

const API_URL = "https://jsonplaceholder.typicode.com/users";

function displayUser(user) {
    userResult.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address?.city || 'N/A'}</p>
    `;
}

async function fetchUser() {
    const userId = userIdInput.value.trim();

    if (!userId) {
        error.textContent = "Please enter a user ID.";
        error.classList.remove("hidden");
        return;
    }

    loading.classList.remove("hidden");
    error.classList.add("hidden");
    userResult.innerHTML = "";

    try {
        const response = await fetch(`${API_URL}/${userId}`);

        if (!response.ok) {
            throw new Error("User not found.");
        }

        const user = await response.json();
        displayUser(user);
        localStorage.setItem("lastUser", JSON.stringify(user));

    } catch (err) {
        // Preserves specific error messages (e.g. "User not found.")
        error.textContent = err.message || "Failed to load user. Please try again.";
        error.classList.remove("hidden");
    } finally {
        loading.classList.add("hidden");
    }
}

async function createDemoPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                title: "Fatima Demo Post",
                body: "This is a POST request demonstration.",
                userId: 1
            })
        });

        if (!response.ok) throw new Error("POST request failed");

        const data = await response.json();
        console.log("POST response:", data);

        // Display the newly created post directly in the UI
        userResult.innerHTML += `
            <div style="border-top: 1px solid #ccc; margin-top: 10px; padding-top: 10px;">
                <h3>Post Created (ID: ${data.id})</h3>
                <p><strong>Title:</strong> ${data.title}</p>
                <p>${data.body}</p>
            </div>
        `;

    } catch (err) {
        console.error("POST failed:", err);
    }
}

function loadCachedUser() {
    const cachedUser = localStorage.getItem("lastUser");
    if (!cachedUser) return;

    try {
        const user = JSON.parse(cachedUser);
        displayUser(user);
    } catch (e) {
        console.error("Failed to parse cached user:", e);
        localStorage.removeItem("lastUser");
    }
}
async function testError() {

    loading.classList.remove("hidden");
    error.classList.add("hidden");

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/this-does-not-exist"
        );

        if (!response.ok) {
            throw new Error("Demo error: API request failed.");
        }

        const data = await response.json();

        console.log(data);

    } catch (err) {

        error.textContent = err.message;
        error.classList.remove("hidden");

    } finally {

        loading.classList.add("hidden");

    }
}

// Bind events safely
if (fetchBtn) fetchBtn.addEventListener("click", fetchUser);
if (postBtn) postBtn.addEventListener("click", createDemoPost);
if (errorBtn) errorBtn.addEventListener("click", testError);

loadCachedUser();