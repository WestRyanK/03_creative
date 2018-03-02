<template>
  <div class="content">
          <div class="titlemessage">
                  <h2>LG Unicycle Club</h2>
                  <p>The most fun you will have with a single wheel!</p>
          </div>
          <div class="text">
                  <p> <img :src="ryanKevin"/>The LaGrange unicycle club was founded in 2008 by Ryan West and Kevin Jourden. Since then, the club has grown to over 15 members! We enjoy riding around downtown LaGrange, hitting up the local skate spots with our unicycles. We also have had a blast taking trips out of town to places such as Cheaha State Park, Callaway Gardens, Peachtree City, and downtown Atlanta, and even the Worlds Robotic Competition in St. Louis Missouri! </p>
                  <p><img class="left" :src="worlds"/>Our club has very diverse riding styles; we have focused on many different unicycling disciplines over the years. When the LG UniClub started, most riders owned simple freestyle Torker unicycles so we focused on simply perfecting our basic riding skills and learning a few simple freestyle tricks such as riding backwards and one-foot pedaling. About a year later, Deylan Crawford purchased a trials unicycle. This inspired most of the club members to follow suit and learn to ride street and trials. During this period, we traveled around the city of LaGrange to learn how to ride down stairs, jump between gaps, and ride on skinnies. We also traveled to The Factory skatepark in Newnan, Georgia, to practice grinding on ledges and rails! </p>
                  <p><img :src="cheaha"/>At one point, Dylan Cox and Kevin Jourden bought larger mountain unicycles. We took many trips to Cheaha State Park to go trail riding down the mountains there. Those were awesome trips, not only filled with unicycling, but also camping and other adventures! Once we went on a trip to Cheaha, but because of incliment weather, were forced to survive the night in a broken tent amidst blustering winds and storms. We barely made it out alive. But ohhh... What a story it is now.</p>
                  <p>Senior year, most of the unicycling team happened to join the LaGrange Highschool Robotics team 3726. We devoted most of our time to building robots and therefore didn't ride as much as we had previous semesters, but we still met many times that year. When our <img class="left" :src="kamen"/>robotics team made it to the Robotics Worlds Championship in St. Louis, Missouri, we elected to take our unicycles with us because... why not? We rode around St. Louis a bit and had a great time. We even got our unicycles signed by Will.i.am and Dean Kamen (the inventor of the segway, which is kind of like a unicycle). The Robotics Team placed 13th in world out of over 100 teams, so we did pretty well. And we got to spread the joy of unicycling to people around the world!</p>
                  <p>Kevin expanded the unicycle club to Valdosta University where he taught many other people how to ride. We went on several trail riding trips together with this group on the Peachtree City trails. Ryan went to BYU and met Colby Thomas, a world-renowned unicyclist. He began riding street with that group of unicyclists. The summer before Ryan served a mission for The Church of Jesus Christ of Latter-day Saints, he and Kevin built an amazing trials course on the foundation of an old abandoned building on Commerce Avenue. We don't know exactly how legal it was to build that there, but we had a blast collecting pallets and logs and then doing trials riding on the course.</p>
          </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      ryanKevin: '/static/images/56.jpg',
      worlds: '/static/images/57.jpg',
      cheaha: '/static/images/43.jpg',
      kamen: '/static/images/59.jpg',
    }
  }
}
</script>

<style>
.text {
	margin: auto;
	max-width: 1000px;
	font-size: 32px;
	text-align: justify;
	text-justify: inter-word;
}
.text img {
	max-width: 400px;
	height: auto;
	margin: 15px;
	margin-top: 0px;
	float: right;
}
.text img.left{
	float: left;
}
</style>
