<h1>Hello, {{ msg }}</h1>
<div>
    <h2>Your Posts</h2>
    <div v-for="post in query.posts">
        {{ post.title }}
    </div>
    <example-core-component message="yup" />
</div>
