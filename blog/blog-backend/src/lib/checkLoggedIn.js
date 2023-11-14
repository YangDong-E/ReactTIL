const checkLoggedIn = (ctx, next) => {
    if (!ctx.state.User) {
        ctx.status = 401; // UInauthorized
        return;
    }
    return next();
};

export default checkLoggedIn;
