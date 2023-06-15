import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import AddNewFriend from "./components/AddNewFriend.vue";

const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("add-new-friend", AddNewFriend);

app.mount("#app");
