<template>
  <div class="footer">
    Check out my <a href="GITHUB">Github</a>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>
<style>
@font-face {
	font-family: "Source Sans Pro 300";
	src: url('/static/fonts/SourceSansPro-Light.ttf');
}
.content {
  margin-top: 100px;
  font-family: "Source Sans Pro 300", serif; 
}
.footer {
  display: block;
  background-color: #888;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: 100px;
}
.footer a {
  color: white;
  text-decoration: none;
}
</style>
