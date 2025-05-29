// store/usersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'inactive' },
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
  },
  // Handle rehydration properly
  extraReducers: (builder) => {
    builder.addCase('persist/REHYDRATE', (state, action) => {
      if (action.payload?.users) {
        return { ...state, ...action.payload.users };
      }
      return state;
    });
  },
});

export const { toggleUserStatus, addUser } = usersSlice.actions;
export default usersSlice.reducer;