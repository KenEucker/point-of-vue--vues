<h1>Hi, {{ msg }}</h1>
<div>
    <h2>Your Posts</h2>
    <div v-for="post in query.posts">
        {{ post.title }}
    </div>
</div>
