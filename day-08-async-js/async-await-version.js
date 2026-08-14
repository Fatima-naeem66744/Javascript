// async/await does not replace Promises. async/await is a way of working with Promises.

function getUser() {

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
//  Mock API: Get Posts
// ------------------------------------------

function getPosts(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Generate random number
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

                // Success
                resolve(posts);

            } else {

                // Failure
                reject("Failed to get posts.");

            }

        }, 1000);
    });
}


// ------------------------------------------
// Mock API: Get Comments
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

            // Success
            resolve(comments);

        }, 1000);
    });
}


// ==========================================
// ASYNC / AWAIT FLOW
// ==========================================

async function loadData() {

    // try contains the code
    // that might fail.

    try {

        // ----------------------------------
        // Step 1: Get User
        // ----------------------------------

        const user = await getUser();


        // ----------------------------------
        // Step 2: Get Posts
        // ----------------------------------
        // We need user.id because
        // posts belong to the user.

        const posts = await getPosts(user.id);


        // ----------------------------------
        // Step 3: Get Comments
        // ----------------------------------
        // We need the post ID because
        // comments belong to the post.

        const comments = await getComments(posts[0].id);


        // ----------------------------------
        // Step 4: Final Result
        // ----------------------------------

        console.log("Final comments:", comments);


    } catch (error) {

        // If ANY awaited Promise rejects,
        // execution jumps here.

        console.log("Error:", error);

    }
}


// Start the async operation
loadData();