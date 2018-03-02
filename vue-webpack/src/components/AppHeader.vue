<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/riders">Riders</router-link></li>
      <li><router-link to="/join">Join</router-link></li>
      <li><router-link to="/videos">Videos</router-link></li>
      <li class="logo"><router-link to="/"><img :src="logo" /></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      logo: '/static/images/logo.png'
    }
  }
};
</script>

<style>
nav ul {
  display: inline;
  list-style-type: none;
  overflow: hidden;
  width: 100%;
}
nav {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: black;
}

nav li:not(.logo) {
  display: inline;
}
nav li a {
  font-size: 24px;
  padding-bottom: 0px;
  -webkit-transition: 0.5s;
  margin: 0px 10px;
  transition: 0.5s;
  color: white;
  text-align: center;
  text-decoration: none;
  font-family: "helvetica";
  font-variant: small-caps;
}
.logo {
  float: right;
  margin-right: 30px;
  margin-top: -40px;
}
.logo a img {
  height: 100px;
  width: auto;
}
</style>
