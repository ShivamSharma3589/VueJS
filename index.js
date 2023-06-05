// NOW, ACCESSING ALL THE COMPONENTS FROM THE BODY
Vue.createApp({
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
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
  data() {
    return {
      activePage: 0,
      theme: "dark",
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
}).mount("body");

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
