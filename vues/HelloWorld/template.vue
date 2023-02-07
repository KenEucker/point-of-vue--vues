<h1>Hello, {{ msg }}</h1>
<div>
    <h2>Your Posts</h2>
    <div v-for="post in query.posts">
        {{ post.tite}}
    </div>
</div>
