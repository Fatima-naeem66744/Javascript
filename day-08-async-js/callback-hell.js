function getUser(callback) {

    setTimeout(() => {

        // Fake user data
        const user = {
            id: 1,
            name: "Fatima"
        };
        console.log("start")
        console.log("fetching user data...")

        console.log("User received:", user);

        // When the user is ready,
        // send the user to the callback function.
        callback(user);

    }, 1000);
}


// ------------------------------------------
//  Mock API: Get Posts
// ------------------------------------------
// This function needs the userId.
// It can either succeed or fail.

function getPosts(userId, successCallback, errorCallback) {

    setTimeout(() => {

        // Generate a random number between 0 and 1.
        const randomNumber = Math.random();

        // If the random number is greater than 0.3,
        // the request succeeds.
        if (randomNumber > 0.3) {

            // Fake posts belonging to this user
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

            // Send the posts to the success callback.
            successCallback(posts);

        } else {

            // If the random number is 0.3 or less,
            // simulate an API error.
            errorCallback("Failed to get posts.");

        }

    }, 1000);
}


// ------------------------------------------
//  Mock API: Get Comments
// ------------------------------------------
// This function needs a postId.
// It returns comments for that post.

function getComments(postId, callback) {

    setTimeout(() => {

        // Fake comments
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

        // Send comments to the callback.
        callback(comments);

    }, 1000);
}


// ==========================================
// CALLBACK HELL STARTS HERE
// ==========================================

// First, we need the user.
getUser(function(user) {

    // We now have the user.
    // Therefore, we can access user.id.

    // We need the user ID to get the posts.
    getPosts(user.id, function(posts) {

        // We now have the posts.
        // Therefore, we can access the first post's ID.

        // We need the post ID to get comments.
        getComments(posts[0].id, function(comments) {

            // We finally have the comments.
            console.log("Final comments:", comments);
            console.log("DONE!");

        });

    }, function(error) {

        // If getPosts fails,
        // this error callback runs.
        console.log("Error:", error);

    });

});