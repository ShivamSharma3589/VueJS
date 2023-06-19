import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BasicCard from "./components/BasicCard.vue";

const app = createApp(App);

app.component("base-badge", BaseBadge);
app.component("base-card", BasicCard);

app.mount("#app");
