function getUser() {

    // Return a Promise instead of using a callback
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const user = {
                id: 1,
                name: "Fatima"
            };

            console.log("User received:", user);

            // Promise succeeded
            resolve(user);

        }, 1000);
    });
}


// ------------------------------------------
// Mock API: Get Posts
// ------------------------------------------

function getPosts(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Random number between 0 and 1
            const randomNumber = Math.random();

            // 70% chance of success
            if (randomNumber > 0.3) {

                const posts = [
                    {
                        id: 101,
                        title: "Learning JavaScript"
                    },
                    {
                        id: 102,
                        title: "Learning Async JavaScript"
                    }
                ];

                console.log("Posts received:", posts);

                // Promise succeeded
                resolve(posts);

            } else {

                // Promise failed
                reject("Failed to get posts.");

            }

        }, 1000);
    });
}


// ------------------------------------------
//  Mock API: Get Comments
// ------------------------------------------

function getComments(postId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const comments = [
                {
                    id: 201,
                    text: "Great post!"
                },
                {
                    id: 202,
                    text: "I am learning JavaScript too."
                }
            ];

            console.log("Comments received:", comments);

            // Promise succeeded
            resolve(comments);

        }, 1000);
    });
}


// ==========================================
// PROMISE CHAIN
// ==========================================

getUser()

    // First Promise succeeded.
    // We receive the user here.
    .then(function(user) {

        // Use the user's ID
        // to get their posts.

        return getPosts(user.id);

    })

    // The Promise returned above gives us posts.
    .then(function(posts) {

        // Use the first post's ID
        // to get its comments.

        return getComments(posts[0].id);

    })

    // The Promise above gives us comments.
    .then(function(comments) {

        console.log("Final comments:", comments);

    })

    // If ANY Promise rejects,
    // this block handles the error.
    .catch(function(error) {

        console.log("Error:", error);

    })

    // This ALWAYS runs,
    // whether the operation succeeds or fails.
    .finally(function() {

        console.log("Async operation finished.");

    });