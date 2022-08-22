# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.

    //on App.js create a className boardgame
    // map over the square component so it can show up nine times.
    //on App.css create a class for boardgame and manipulate the width and add a flex wrap so that the boardgame can have a 3 by 3 grid.

- As a user, I can click on a square to mark it.
    // Created a variable that alerts us of the index named handleGamePlay
    // Passed handleGamePlay variable through Square component call so that we have access to that information on our Square component 
    // On Square.js, we created a handleClick variable that pulls information from App.js of handleGamePlay and index of Square array
    // Give div an onClick of handleClick 


   <!-- How do we get the value to update from null to X -->
    //Create another useState that contains values and push those values into Square useState function
   // Figure out a method that pushes those values from the useState into the Square useState 


   
- As a user, my partner can click on a square after me and see their mark.
- As a user, I can't click on a square that has already been marked.
- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.
    //Created an array called winCondition that has winning values in an array 
    // Create a function that iterates over winCondition and checks whether the index of the og array has changed to match one of the conditions 
        // Utilize filter() to iterate through the array and output a new array once the condition is met 
       // create a prompt/pop up to show that player has won once those conditions have been met 

- As a user, I can't continue playing the game after the game has been won.
- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.
- As a user, I can click on a restart button that will clear the game board.

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
