let GithubUserCardComponent = {
    template: '#github-user-card-template',
    props: {
        login: { type: String, required: true }
    },
    data() {
        return {
            username: null,
            joined: 0,
            bio: null,
            followers: 0,
            imageUrl: "https://semantic-ui.com/images/avatar2/large/kristy.png",
        }
    },
    async created() {
        var url = `https://api.github.com/users/${this.login}`;
        const res = await axios(url);
        const data = res.data;
        this.username = data.name;
        this.joined = new Date(data.created_at).getFullYear();
        this.bio = data.bio;
        this.followers = data.followers;
        this.imageUrl = data.avatar_url;
    }
}

const app = Vue.createApp({
    components: { 'github-user-card': GithubUserCardComponent }
})
    .mount('#app')