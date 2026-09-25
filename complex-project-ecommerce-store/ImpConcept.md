#  REDUX TOOLKIT
## [study link](https://www.geeksforgeeks.org/web-tech/introduction-to-react-redux/)
React-Redux is a tool that helps you manage the state (data) of your React app in one central place. 
-  Store:
The store is a central place that holds all the app’s data.
-  Actions
An action is a simple JavaScript object that tells Redux what change to make.
```js 
const incrementAction = {
    type: 'INCREMENT',
    payload: 1
};

```
-  Reducers
A reducer is a pure function that decides how the state changes when an action is received.
```jsx          
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};
```
-  Dispatch
Dispatch is used to send an action to the Redux store.
```jsx
store.dispatch(incrementAction);
```
- Selectors
A selector is a function that is used to get specific data from the Redux store
```jsx 
const selectCount = (state) => state.count;
```
- Provider
The Provider component makes the Redux store available to all React components in the app.
# State management 
## [study link](https://www.freecodecamp.org/news/react-state-management/)
State can be defined as an object that houses data that changes over time in an application.We use useState for this. useState hook functions that allow components to have state variables.There are two types of state: 
- Global State
These are states that are accessible to every component in the application. It is always declared and located in the root component of your app before the JSX is returned.
- Local State
Local states refers to the internal data maintained by a component. Local states are located within the parent components in an application. 
# Zustand intro:
## [study material](https://www.geeksforgeeks.org/typescript/introduction-to-zustand/)
Zustand is a state management library used to manage your app's data in React and Next.js. It's fast and easy to use, allowing you to share information between components without a lot of extra code.
- Hooks-Based API: It uses React hooks, making it intuitive and easy to use.
- Scalable: Suitable for both small and large applications.
Here's a quick comparison:

| Feature | Zustand | Redux Toolkit |
| :--- | :--- | :--- |
| **Boilerplate** | Minimal | More boilerplate |
| **Learning Curve** | Easy to learn | Steeper learning curve |
| **Performance** | Lightweight and fast | Slightly heavier due to middleware |
| **Flexibility** | Highly flexible | Structured but less flexible |
| **Use Case** | Small to medium-sized projects | Large-scale applications |
