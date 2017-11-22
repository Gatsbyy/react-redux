// require("babel-polyfill");

export const HOME_ACTION = "HOME_ACTION";
export const getHomeInfo = preState=>({
  type: HOME_ACTION,
  preState
});

export const getHomeInfoQuery = data =>  dispatch => {
  const preState = {
    count: data,
  };

  dispatch(getHomeInfo(preState));
};




