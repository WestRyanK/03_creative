<template>
  <div class="content">
    <div class="titlemessage">
            <h2>Meet the Riders</h2>
            <p>Get to know the LaGrange Unicycle Club members. We're pretty cool!</p>
    </div>
    <div class="cardList">
        <div class="profile">
                <img :src="ryan"/>
                <div>Ryan West</div>
        </div>
        <div class="profile">
                <img :src="kevin"/>
                <div>Kevin Jourden</div>
        </div>
        <div class="profile">
                <img :src="keith"/>
                <div>Keith Jourden</div>
        </div>
        <div class="profile">
                <img :src="deylan"/>
                <div>Deylan Crawford</div>
        </div>
        <div class="profile">
                <img :src="dylan"/>
                <div>Dylan Cox</div>
        </div>
        <div class="profile">
                <img :src="draven"/>
                <div>Draven Whitaker</div>
        </div>
        <div class="profile titlemessage">
                <h2>Build Forever Friendships</h2>
                <p>Join the LaGrange Unicycle Club and make friendships that last a lifetime!</p>
        </div>
        <div class="profile banner">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Riders',
  data () {
    return {
      ryan: '/static/images/47.png',
      kevin: '/static/images/51.png',
      keith: '/static/images/50.png',
      deylan: '/static/images/49.png',
      dylan: '/static/images/46.png',
      draven: '/static/images/48.png',
    }
  }
}
</script>

<style>
.profile.titlemessage{
	grid-row-start: 7;
	grid-column-start: 1;
	grid-column-end: 2;
}

.profile.titlemessage p {
margin-bottom: 0px;
}

.profile.banner {
	grid-row-start: 8;
	grid-column-start: 1;
	grid-column-end: 2;
	width: 100%;
	transition: height 1s;
	height: 400px;
	background-position: center;
	background-size: cover;
	background-image: url('/static/images/45.png');
	width: 100%;
	display:block;
}

.profile:not(.banner) img {
	/*border-radius: 25px;*/
	width: 540px;
	transition: width 1s;
	height: auto;
}
.profile:not(.banner):not(.titlemessage) {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: white;
}

.profile div {
	-webkit-margin-before: 0px;
	-webkit-margin-after: 20px;
	font-size: 64px;
	text-align: center;
}

</style>
