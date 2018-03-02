<template>
  <div class="content join">
    <div class="titlemessage">
        <h2>Join the Club</h2>
        <p>You're one step away from joining the LaGrange Unicycle Club! Enter your info below and we'll get back to you with info about our next meeting.</p>
</div>
<form action="https://formspree.io/west.ryan.k@gmail.com" method="POST">
        <label for="name">Name
        <input type="text" class="name" name="name"/></label>
        <label for="mail">Email
        <input type="email" class="mail" name="_replyto"/></label>
        <label for="skill">Skill Level</label>
        <div id="radioskill">
        <label class="beginner"><input type="radio" name="toggle"><span>Beginner</span></label>
        <label class="intermediate"><input type="radio" name="toggle"><span>Intermediate</span></label>
        <label class="advanced"><input type="radio" name="toggle"><span>Advanced</span></label>
        </div>
        <br/>
        <label for="message">Message
        <textarea type="text" class="message" name="msg"></textarea></label>
        <button type="submit" value="Send">Submit</button>
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>

<style>
label {
	font-size: 24px; }

input:focus, textarea:focus {
	border: #555 solid 2px;
}
textarea {
	height: 200px;
}
textarea, input {
	width: 100%;
	font-size: 24px;
	outline: none;
	border: #CCC solid 2px;
	resize: none;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	padding: 12px 20px;
	border-radius: 5px;
	margin: 10px 0px;
}
button {
	font-size: 24px;
	outline: none;
	padding: 12px 20px;
	border: none;
	width: 104%;

	border-radius: 5px;
	cursor: pointer;
	margin: 10px auto;
	color: white;
	-webkit-transition: 0.25s;
	transition: 0.25s;
	background-color: #00129B;
}

button:hover {
	/*background-color: #BF5D28;*/
}

#radioskill {
	display: grid;
	grid-template-columns: auto auto auto;
	grid-column-gap: 20px;
	height: 70px;
	justify-content: center;
	justify-items: center;

}
#radioskill label {
	float:left;
	width:200px;
	margin:4px;
	background-color:#EFEFEF;
	border-radius:4px;
	border:1px solid #D0D0D0;
	overflow:hidden;    
}

#radioskill label span {
	text-align:center;
	font-size: 32px;
	transition: 0.5s;
	padding:13px 0px;
	display:block;
}

#radioskill label input {
  display: none;
}

#radioskill input:checked + span {
	background-color: #00129B;
	color:#F7F7F7;
}
.content.join {
	max-width: 1000px;
        margin-left: auto;
        margin-right: auto;
}
</style>
