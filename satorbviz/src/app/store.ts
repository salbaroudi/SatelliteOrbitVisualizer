import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

//This is type Aliasing, as mentioned here: https://stackoverflow.com/questions/44079820/what-is-export-type-in-typescript
/*
Example: "export type feline = typeof cat" Equivalent to the following code:
type feline = typeof cat;
export {
    feline
}
*/
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
