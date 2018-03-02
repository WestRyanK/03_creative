<template>
  <div class="content">
  <div class="titlemessage">
    <h2>Watch our videos</h2>
    <p>Catch some of our greatest (and worst) moments from club meetings!</p>
  </div>
  <div class="cardList">
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/CEsebDCdpJM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=CEsebDCdpJM&t=2s"><img :src="goodOldDays"/></a>
            <div>Good 'Ol Days</div>
            <p>This is a video of lost footage, we thought these clips had been lost for over 2 years, but we finally stumbled upon them by accident. This video is packed with some of our club's most memorable clips: unicycling on ice, ice blocking, Phil the Hill, Greek cookie throwing, and Deylan's "smashing" grind. Enjoy!</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/o09q96ZBsP4?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=o09q96ZBsP4"><img :src="cheahaMuniTrip"/></a>
            <div>Cheaha Muni Trip</div>
            <p>The LaGrange Unicycle Club took a day trip to Cheaha over Christmas break for some mountain riding. We rode down Rock Garden Trail and did some trials on the wood piles.</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/3LlcTceIS64?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=3LlcTceIS64"><img :src="theFactory"/></a>
            <div>The Factory</div>
            <p> The club took a trip to Newnan, Georgia to visit a skatepark called The Factory. Ryan and Deylan learned how to grind. These clips are several years old, I finally just got around to making the video.</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/5efmMg5XmlI?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=5efmMg5XmlI"><img :src="fails"/></a>
            <div>Unicycle Fails Compilation</div>
            <p> This video is a compilation of failed tricks from our unicycle meetings. I've put the clips in chronological order so you can see how much more epic they have become from the start! There are no new clips in here, they are just taken from the source files of all the videos.</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/kXpgSppf9BE?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=kXpgSppf9BE"><img :src="shenanigans"/></a>
            <div>Shenanigans</div>
            <p>From forced cross dressing to sliding on brick, from shoulders riding to sideways unicycle grinding, the LaGrange Unicycle Club never ceases to have fun and do all sorts of shenanigans.</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/Z4Bw3YxCH2s?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=Z4Bw3YxCH2s"><img :src="theFoundation"/></a>
            <div>The Foundation</div>
            <p>Kevin and Ryan built a unicycle trials course on an abandoned building foundation. Building it was a lot of work, but it was a lot of fun also!</p>
    </div>
    <div class="card">
            <!--<iframe width="560" height="315" src="https://www.youtube.com/embed/YXjcM4S19Y8?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>-->
            <a href="https://www.youtube.com/watch?v=YXjcM4S19Y8"><img :src="sunsets"/></a>
            <div>Silhouettes and Sunsets</div>
            <p>Ryan's riding during Winter semester of 2013 at Brigham Young University. I got injured quite a bit this semester (but hey, it makes for good video!).</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Videos',
  data () {
    return {
      goodOldDays: '/static/images/video_04.png',
      cheahaMuniTrip: '/static/images/video_05.png',
      theFactory: '/static/images/video_06.png',
      shenanigans: '/static/images/video_02.png',
      fails: '/static/images/video_01.png',
      theFoundation: '/static/images/video_03.png',
      sunsets: '/static/images/video_07.png',
    }
  }
}
</script>
<style>

.card:not(.banner):not(.titlemessage) {
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	background-color: white;
	width:560px;
}

.card div {
	-webkit-margin-before: 0px;
	-webkit-margin-after: 0px;
	font-size: 48px;
	text-align: center;
}
.card p {
	font-size: 24px;
	padding: 20px;
	color: rgba(0,0,0, 0.5);
}
</style>
