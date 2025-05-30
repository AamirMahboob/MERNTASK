// 
// store/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor', status: 'active' },
    { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer', status: 'inactive' },
    { id: 6, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'active' },
    { id: 7, name: 'Frank Wilson', email: 'frank@example.com', role: 'Editor', status: 'active' },
    { id: 8, name: 'Grace Miller', email: 'grace@example.com', role: 'Viewer', status: 'inactive' },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleUserStatus: (state, action) => {
      const user = state.users.find(user => user.id === action.payload);
      if (user) {
        user.status = user.status === 'active' ? 'inactive' : 'active';
      }
    },
    addUser: (state, action) => {
      state.users.push({
        id: Date.now(),
        ...action.payload
      });
    },
    resetUsers: (state) => {
      state.users = initialState.users;
    }
  },
  extraReducers: (builder) => {
    builder.addCase('persist/REHYDRATE', (state, action) => {
      if (action.payload?.users) {
        return {
          ...state,
          users: action.payload.users.users || initialState.users
        };
      }
      return state;
    });
  },
});

export const { toggleUserStatus, addUser, resetUsers } = usersSlice.actions;
export default usersSlice.reducer;