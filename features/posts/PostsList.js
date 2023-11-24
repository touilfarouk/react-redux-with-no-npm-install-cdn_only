
import {selectAllPosts} from './postsSlice'
function PostsList() {
  const posts = ReactRedux.useSelector(selectAllPosts);
  const  renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>{/* post.content.substring(0,100) */}</p>
        </article>
))
    return (
        <section>
            {renderPosts}
        </section>
    )
}
export default PostsList;