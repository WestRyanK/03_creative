<template>
  <div id="app">
    <AppHeader/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
    components: { AppHeader, AppFooter }
};
</script>

<style>
@font-face {
	font-family: "Source Sans Pro 300";
	src: url('/static/fonts/SourceSansPro-Light.ttf');
}

body{
  font-family: "Source Sans Pro 300", serif; 
  margin: 0;
  padding: 0;
}

.content {
  padding-top: 50px;
}

.titlemessage h2
{
	font-size: 100px;
	margin:0;
}
.titlemessage 
{
	display: block;
	text-align: center;
	margin: auto;
	width: 700px;
}

.titlemessage p
{
	margin: 0;
	font-size: 46px;
	color: rgba( 0,0,0, 0.5);
	margin-bottom: 200px;
}

.cardList
{
	display: grid;
	grid-template-columns: auto;
	/*grid-template-columns: auto auto auto;
	grid-template-rows: auto auto auto;*/
	justify-items: center;
	grid-column-gap: 30px;
	grid-row-gap: 80px;

}

@media screen and (max-width: 600px) {
	.profile.banner {
		height: 200px;
	}
	.profile:not(.banner) img {
		max-width: 100%;
		height: auto;
	}
}

@media screen and (min-width: 1150px) {

	.cardList {
		grid-template-columns: auto auto;
	}
	.profile.titlemessage{
		grid-row-start: 4;
		grid-column-end: 3;
	}
	.profile.banner {
		grid-row-start: 5;
		grid-column-end: 3;
		height: 600px;
	}
}

@media screen and (min-width: 1720px) {

	.cardList {
		grid-template-columns: auto auto auto;
	}
	.profile.titlemessage{
		grid-row-start: 3;
		grid-column-end: 4;
	}
	.profile.banner {
		grid-row-start: 4;
		grid-column-end: 4;
		height: 700px;
	}
}
</style>
