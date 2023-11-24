import postsReducer from '../features/posts/postsSlice';

export const store = RTK.configureStore({
    reducer: {
        posts: postsReducer,
       
    }
})