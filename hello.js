let user = prompt("What's your name?");

// Start the game
startGame(user);

function startGame(user) {
    console.log("Hey " + user + ".");
    console.log("School just ended, and you're heading home.");
    console.log("It feels like a normal day... but something feels off.");
    console.log("");

    console.log("What do you want to do?");
    console.log("1. Walk straight home");
    console.log("2. Stop at the park");
    console.log("");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            street(user, false);
            return;
        case "2":
            park(user, false);
            return;
        default:
            console.log("That is not a valid choice.");
            startGame(user);
    }
}

/*
 * End game screen
 */
function endGame(ending) {
    console.log("");
    console.log("Game Over");
    console.log("Ending: " + ending);
    console.log("Refresh to try again.");
    console.log("");
}

/*
 * Street scene
 */
function street(user, hasPhone) {
    console.log(user + ", you walk down your usual street.");
    console.log("It's quieter than normal.");

    console.log("1. Check your phone");
    console.log("2. Keep walking");
    console.log("3. Go back");
    console.log("");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            console.log("You reach into your pocket...");
            console.log("Your phone isn't there.");
            street(user, hasPhone);
            return;
        case "2":
            home(user, hasPhone);
            return;
        case "3":
            startGame(user);
            return;
        default:
            console.log("That is not a valid choice.");
            street(user, hasPhone);
    }
}

/*
 * Park scene
 */
function park(user, hasPhone) {
    console.log(user + ", you stop at the park.");
    
    if (!hasPhone) {
        console.log("You notice something on a bench.");
        console.log("1. Check the bench");
        console.log("2. Ignore it and leave");
    } else {
        console.log("You have your phone now.");
        console.log("1. Leave the park");
    }

    console.log("");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            if (!hasPhone) {
                console.log("It's your phone. You must have dropped it earlier.");
                park(user, true); // now you HAVE the phone, changes options
            } else {
                street(user, true); // leave park with phone
            }
            return;

        case "2":
            if (!hasPhone) {
                street(user, false);
            } else {
                console.log("That is not a valid choice.");
                park(user, hasPhone);
            }
            return;

        default:
            console.log("That is not a valid choice.");
            park(user, hasPhone);
    }
}
/*
 * Home scene
 */
function home(user, hasPhone) {
    console.log(user + ", you arrive home.");
    console.log("The door is locked.");

    console.log("1. Knock on the door");
    console.log("2. Use your phone");
    console.log("3. Sit and wait");
    console.log("");

    let choice = prompt("Enter your choice:");

    switch (choice) {
        case "1":
            console.log("No one answers.");
            home(user, hasPhone);
            return;
        case "2":
            if (hasPhone) {
                console.log("You call someone inside. They let you in.");
                endGame("Normal Ending");
            } else {
                console.log("You don't have your phone.");
                home(user, hasPhone);
            }
            return;
        case "3":
            console.log("You wait for a while.");
            console.log("Someone finally gets home and lets you in.");
            endGame("Patient Ending");
            return;
        default:
            console.log("That is not a valid choice.");
            home(user, hasPhone);
    }
}