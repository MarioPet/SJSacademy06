import axios from "axios";

export const FetchUsersStart = (users) => {
    console.log(users);
    return {
        type: "FETCH_USERS",
        payload: users
    }
}

export const FetchUsers = () => {
    return dispatch => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                let usersMap = {};
                let countUsersMap = {};

                for (let i in res.data) {
                    usersMap[res.data[i].id] = parseInt(i);
                    countUsersMap[res.data[i].id] = 1;
                }
                dispatch(FetchUsersStart({ users: res.data, usersMap }));
            })
            .catch(err => console.error(err));
    }
}