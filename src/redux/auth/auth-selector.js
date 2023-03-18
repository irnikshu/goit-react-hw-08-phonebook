export const isUserLogin = ({auth}) => auth.isLogin;
export const getAuth = ({auth}) => {
    const {isLogin, token} = auth;
    return {isLogin, token};
}
export const getUser = ({auth}) => auth.user;

// export const getUser = state => state.auth.user;
// export const isUserLogin = state => state.auth.isLogin;
// export const getAuth = state => {
//   const { isLogin, token } = state.auth;
//   return { isLogin, token };
// };