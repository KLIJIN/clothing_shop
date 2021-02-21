import { createSelector } from "reselect";

const selectUser = (state) => state.userR;

export const selectcurrentUser = createSelector(
    [selectUser],
    (userR) => userR.currentUser
);






