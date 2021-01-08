<template>
  <div id="app">
      <loading :active.sync="isLoading" :is-full-page="fullPage" loader="bars" :opacity="opacity"></loading>

    <div class="container">
      <div class="menu" @click="sidemenu = true">
        <img src="./assets/images/menu.png" alt height="30px" width="30px" />
      </div>
      <div class="name capitalize">
        <div class="firstname"><p>{{ firstname }}</p></div>
        <div class="lastname"><p>{{ lastname }}</p></div>
      </div>
      <div class="img">
        <img src="./assets/images/img1.png" alt height="90%" />
      </div>
      <div class="tabs_container" :class="{ show: sidemenu }">
        <div class="tabs">
          <div class="cross">
            <img @click="sidemenu = false" src="./assets/images/cross.svg" alt height="20px" width="20px" />
          </div>
          <a @click="sidemenu = false" href="#">Home</a>
          <a @click="sidemenu = false" href="#">About</a>
          <div class="img2"></div>
          <a @click="sidemenu = false" href="#">Gallery</a>
          <a @click="sidemenu = false" href="#">Contact</a>
        </div>
      </div>
    </div>
    <div class="socials_container">
      <div class="socials">
        <a class="svg_container" :href="`https://www.instagram.com/${social.instagram}`" target="blank">
          <img src="./assets/images/instagram.svg" height="30px" width="30px" />
        </a>
        <a class="svg_container" :href="`https://www.twitter.com/${social.twitter}`" target="blank">
          <img src="./assets/images/twitter.svg" height="30px" width="30px" />
        </a>
        <a
          class="svg_container"
          :href="`https://www.snapchat.com/${social.snapchat}`"
          target="blank"
        >
          <img src="./assets/images/snapchat.svg" height="30px" width="30px" />
        </a>
        <a class="svg_container" :href="`mailto: ${social.email}`" target="blank">
          <img src="./assets/images/mail2.svg" height="30px" width="30px" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import api from "./api/index";
import Loading from "vue-loading-overlay";
import 'vue-loading-overlay/dist/vue-loading.css';


export default {
  name: "App",
  data() {
    return {
      // name: "",
      firstname: "",
      lastname: "",
      social: {
        email: "",
        instagram: "",
        snapchat: "",
        twitter: ""
      },
      sidemenu: false,
      isLoading: true,
      fullPage: false,
      opacity: 0.8,
    };
  },
  components: {
    Loading
  },
  mounted() {
    api
      .get("https://hirng-x2021.glitch.me/api")
      .then(res => {
        [this.firstname, this.lastname] = res.data.name.split(" ");
        this.social.email = res.data.social_media.email;
        this.social.instagram = res.data.social_media.instagram;
        this.social.snapchat = res.data.social_media.snapchat;
        this.social.twitter = res.data.social_media.twitter;
        this.isLoading = false;
      })
      .catch(err => console.error(err));
  }
};
</script>

<style src='./assets/css/style.css'></style>
