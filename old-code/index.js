// NOW, ACCESSING ALL THE COMPONENTS FROM THE BODY
const app = Vue.createApp({
  // This property cache the outcome however any changes in the data will affect the content inside
  // computed: {
  //   navbarClasses() {
  //     return {
  //       "navbar-light": !this.isDarkMode,
  //       "bg-light": !this.isDarkMode,
  //       "navbar-dark": this.isDarkMode,
  //       "bg-dark": this.isDarkMode,
  //     };
  //   },
  // },
  data() {
    return {
      activePage: 0,
      pages: [
        {
          link: { title: "Home", url: "index.html" },
          pageTitle: "Home Page",
          content: "This is the home page!",
        },
        {
          link: { title: "About", url: "about.html" },
          pageTitle: "About Page",
          content: "This is the about page!",
        },
        {
          link: { title: "Contact", url: "contact.html" },
          pageTitle: "Contact Page",
          content: "This is the contact page!",
        },
      ],
    };
  },
});

app.component("navbar", {
  props: ["pages", "activePage", "navLinkClick"],
  template: `
    <nav class="navbar navbar-expand-lg mb-3" :class="[\`navbar-\${this.theme}\`, \`bg-\${this.theme}\`]" id="navbar">
      <div class="container">
        <a class="navbar-brand" href="/" @click.prevent="navLinkClick(0)">VueJS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="(page, index) in pages" :key="index" class="nav-item">
              <a class="nav-link" :class="{active: activePage === index}" aria-current="page" :href="page.link.url"
                :title="\`This link goes to \${page.link.title}\`"
                @click.prevent="navLinkClick(index)">{{page.link.title}}</a>
            </li>
          </ul>
          <form class="d-flex" @click.prevent="changeTheme">
            <button class="btn btn-sm btn-outline-success" type="submit">Theme Mode</button>
          </form>
        </div>
      </div>
    </nav>
  `,
  data() {
    return {
      theme: "dark",
    };
  },
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
});

app.component("page-viewer", {
  props: ["page"],
  template: `
    <div class="container">
      <div className="card">
        <div className="card-body">
          <h1>{{page.pageTitle}}</h1>
          <p>{{page.content}}</p>
        </div>
      </div>
    </div>
  `,
});

app.mount("body");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DEMO FOR SEPERATE HANDLING OF THE COMPONENT
// Vue.createApp({
//   data() {
//     return {
//       links: [
//         {
//           title: "Home",
//           link: "index.html",
//         },
//         {
//           title: "About",
//           link: "about.html",
//         },
//         {
//           title: "Contact",
//           link: "contact.html",
//         },
//       ],
//     };
//   },
// }).mount("#navbar");

// Vue.createApp({
//   data() {
//     return {
//       pageTitle: "Hello Vue",
//       content:
//         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nihil minus assumenda in dolores officiis molestiae cumque? Voluptatem deserunt quidem ex expedita animi!",
//     };
//   },
// }).mount("#content");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
