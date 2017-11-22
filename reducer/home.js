import { HOME_ACTION } from  "../actions/home";

const initState = {
  count: 0,
};

export default (state = initState, action) => {
  const { type, preState } = action;
  const copyState = Object.assign({}, state);
  switch(type) {
    case HOME_ACTION:
    return Object.assign({}, initState, preState);
    default:
    return copyState
  }
}