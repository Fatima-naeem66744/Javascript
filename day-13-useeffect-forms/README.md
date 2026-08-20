# JAM RECORDING
[Day 13 – useEffect & Forms – Proof of Completion](https://jam.dev/c/c17734b6-aff0-43b6-9e1d-932f8728c2fd)

# Day 13 – useEffect & Forms

Built a React searchable users list that fetches user data from a public API once when the component mounts using `useEffect` with an empty dependency array. The app shows loading and error messages during the fetch, and uses a fully controlled search input to filter the already-fetched users as the user types without making new API requests. A second `useEffect` handles the search with a short debounce using `setTimeout`, and its cleanup function uses `clearTimeout` to cancel the previous timer when the search changes, preventing unnecessary searches and demonstrating proper `useEffect` cleanup.
