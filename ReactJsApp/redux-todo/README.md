# redux-todo

https://redux.js.org/basics/example

## Actions
- Actions are payloads of information that send data from your application to your store. 
- They are the only source of information for the store. You send them to the store using store.dispatch().

## Action Creators
- Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.
```bash
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
```

## Reducers
- Reducers specify how the application's state changes in response to actions sent to the store.
- Remember that actions only describe what happened, but don't describe how the application's state changes.
- In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code. 

## Store
- The Store is the object that brings them together. The store has the following responsibilities:
- Holds application state;
- Allows access to state via getState();
- Allows state to be updated via dispatch(action);
- Registers listeners via subscribe(listener);
- Handles unregistering of listeners via the function returned by subscribe(listener).

## Data Flow
- Redux architecture revolves around a strict unidirectional data flow.
- This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand.
- It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.


