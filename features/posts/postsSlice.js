const { createSlice, nanoid } = RTK;

// const initialState = [{ id: 1 ,title:'farouk',content:'some of my wonderfull cotent' },
// { id: 2 ,title:'farouk',content:'some of my wonderfull cotent' }
// ];

const initialState = [{}];
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
