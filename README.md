# ADP Assignment 2

Create a simple game using React Native, you are expected to demonstrate your knowledge and proper use of basic react features, and your ability to utilize javascript as a programming language.

Some of the grading criteria is the same as A1, this is because ideas like having a modular structure, good coding styles and conventional commit messages are always expected from your code.

## Topics

* React
* React Native
* Expo

## Getting Started

1. Use `expo init` to start a new React Native project
2. Start coding from `App.js`
3. View the app in a web browser or iOS/Android simulator

For the purpose of this assignment, your React Native project should be managed by Expo, ejection for further fine tuning is not only not required, you are recommended to keep your app within what Expo can manage and avoid ejection.

## Grading Criteria

1. Use React, React Native, and Expo
   1. Make sure your React Native's node module is setup properly using Expo's distribution
   2. Change your app's splash screen via Expo's `app.json`
2. Proper structuring of components
   1. Create a modular architecture by spliting the application into components
   2. Proper use of *context*, states, and props to share data between components.
   3. State and props should not rerender excessively - components that are not intended to re-render should be affected by unrelated changes to the web app
3. At least one legitimate use of the *useEffect* hook
4. Use 3rd party component library for app paging (e.g. Home Screen, Game Screen, etc.), you can use `react-router-native` or `react-navigation`
5. Good coding style, this includes having comments, proper indentation, self-explanatory variable/function names, etc.
6. Git, and commit your code regularly.
   1. Use conventional commit messages. See: https://www.conventionalcommits.org/en/v1.0.0-beta.4/
   2. If you only have one commit in your git repo you will not receive any points for git. **Commit often**
   3. If you branched out to develop features and bug fixes, make sure you push these branches to the remote as well, these are good practices and will be take into consideration for your Git score.

## Bonus Extensions

1. Use functional components for all components and hooks to manage all state
2. Use a third party hook (hint: if you are using `react-router-native` or `react-navigation`, the use of their hooks is most probably inevitable)
3. Use useReducer or Redux