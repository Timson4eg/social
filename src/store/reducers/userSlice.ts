import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../components/types/types";
import { IUserChat } from "../../components/Friends/FriendsBlock";

export interface UserState {
  users: IUserChat[];
  loading: boolean;
  error: null | string;
}

const initialState: UserState = {
  users: [
    {
      id: 1,
      name: "Carter Donin",
      job: "UI/UX Designer",
      status: "online",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " ggwp",
    },
    {
      id: 2,
      name: "Nolan Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 3,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 4,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 5,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 6,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 7,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " ggwp",
    },
    {
      id: 8,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 9,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 10,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 11,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 12,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 13,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 14,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 15,
      name: "Skaylar Donin",
      job: "UI/UX Designer",
      status: "ofline",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
    {
      id: 16,
      name: "Maria Donin",
      job: "UI/UX Designer",
      status: "sleeping",
      img: "https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png",
      lastMessage: " qqYopt",
    },
  ],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    fetchUsers: (state) => {
      return state;
    },
  },
});

export const { fetchUsers } = userSlice.actions;

export default userSlice.reducer;

//   state = initialState,
//   action: UserAction
// ): UserState => {
//   switch (action.type) {
//     case UserActionTypes.FETCH_USERS:
//       return { loading: true, error: null, users: [] };
//     case UserActionTypes.FETCH_USERS_SUCCESS:
//       return { loading: false, error: null, users: action.payload };
//     case UserActionTypes.FETCH_USERS_ERROR:
//       return { loading: false, error: action.payload, users: [] };

//     default:
//       return state;
//   }
// };

// export const userReducer = (
//   state = initialState,
//   action: UserAction
// ): UserState => {
//   switch (action.type) {
//     case UserActionTypes.FETCH_USERS:
//       return { loading: true, error: null, users: [] };
//     case UserActionTypes.FETCH_USERS_SUCCESS:
//       return { loading: false, error: null, users: action.payload };
//     case UserActionTypes.FETCH_USERS_ERROR:
//       return { loading: false, error: action.payload, users: [] };

//     default:
//       return state;
//   }
// };
