<script lang="ts">
	import gsap from 'gsap';
</script>

<div class="wrapper">
	<div class="heading">
		<h1>
			Personal

			<span class="border">Development</span>
			Starts <br />With a Quality
			<span class="border">Education</span>*.
		</h1>
		<div class="content">
			<p>
				With TISOE you can learn new skills from our experienced teachers
				<br />to help you in achieving your goals
			</p>
		</div>
	</div>
	<div class="arrows">
		<svg xmlns="http://www.w3.org/2000/svg" width="180" height="200" viewBox="0 0 181.166 199.076">
			<path
				id="Path_9"
				data-name="Path 9"
				d="M161.886-120.134c1.54,1.153,6.351,4.228,10.584,6.727l7.7,4.613-18.474.192c-45.416,0-81.209,19.412-96.412,51.7-2.665,5.817-5.888,13.663-5.888,13.663a61.794,61.794,0,0,0-7.043,2.674c-17.32,7.5-34.024,29.6-39.6,53.432-4.811,20.373-2.694,49.78,4.426,62.081,2.694,4.805,3.079,1.153.385-5.766C7.742,43.43,13.323,2.876,29.873-18.843c5.581-7.5,22.515-20.566,26.364-20.566.962,0,1.732,3.075,1.732,6.919,0,14.607,11.546,27.677,21.746,24.6,10.777-3.267,15.972-15.953,10.2-24.986-4.234-6.343-14.241-12.3-20.783-12.3-6.351,0-6.351,0-2.5-8.841C77.6-80.54,106.656-99.953,142.642-105.142c17.127-2.306,44.838-.577,43.684,2.883-.385,1.345-7.12,5.574-15.01,9.418-7.89,4.036-12.893,7.3-11.161,7.3,4.426,0,25.594-10.956,29.443-15.184,3.271-3.652,2.887-4.036-10.2-11.532C166.312-119.942,155.536-124.747,161.886-120.134ZM75.866-40.562c12.7,5.382,17.512,17.875,10.007,26.14-11.161,12.3-30.6-6.919-24.055-23.833C63.934-43.83,66.821-44.406,75.866-40.562Z"
				transform="translate(-10.153 121.939)"
				fill="var(--black)"
			/>
		</svg>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 50vh;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: -1;
		display: flex;
		flex-direction: column;
		margin-top: 65px;
	}
	.heading {
		width: fit-content;
	}
	.heading h1,
	.heading .border,
	.heading span,
	.heading div {
		font-size: 4rem;
		font-weight: 800;
		margin-bottom: 0;
		font-family: 'Inter';
		text-align: center;
		line-height: 6rem;
	}
	.heading h1 {

		color: var(--black);
	}
	.heading p {
		font-size: 1.1rem;
		font-weight: 400;
		margin-bottom: 0;
		font-family: 'Poppins';
		text-align: center;
		margin-top: 3em;
		opacity: 0.5;
		font-weight: 500;
		line-height: 30px;
	}
	.border {
		width: fit-content;
		position: relative;
	}
	.heading span:before {
		display: block;
		content: '';
		position: absolute;
		width: calc(100% + 5px);
		height: 18px;
		top: 0.8em;
		left: -2.5px;
		z-index: -1;
		background-color:#46ecb8;
	}
	.arrows {
		position: absolute;
		left: 12%;
		top: 26vh;
	}
</style>
