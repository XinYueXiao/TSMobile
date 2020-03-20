import {
  ActionValue,
  createAction,
  createActions,
  NoArgAction,
  NumberAction,
} from 'redux-type-actions';
// import { Location, User } from 'types/types';

const actions = createActions({
  // UI
  showCameraOptions: NoArgAction,

  setAge: NumberAction,

  setUser: createAction<{name: string; age: number; sex: 'male' | 'female'}>(),
  // Data
  // setUser: createAction<User>(),
  // setLocation: createAction<Location>(),
  logout: NoArgAction,
});

export type Action = ActionValue<typeof actions>;

export default actions;
