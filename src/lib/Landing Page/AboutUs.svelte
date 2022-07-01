<script lang="ts">
	import gsap from 'gsap';
	// import { onMount } from 'svelte';

	// const tl = gsap.timeline();
	let title: any;
	const header = [
		'Why',
		'are ',
		'we',
		'the',
		'best',
		'and',
		'why',
		'you',
		'should',
		'choose',
		'us?'
	];
	// onMount(() => {
	// 	tl.fromTo(
	// 		'.animate_me_title',
	// 		{
	// 			y: 100,
	// 			ease: 'power4.out',
	// 			delay: 1,
	// 			skewY: 7,

	// 		},
	// 		{
	// 			y: 0,
	// 			skewY: 0,
	// 			stagger: {
	// 				amount: 0.5
	// 			}
	// 		}
	// 	);
	// });
</script>

<div class="wrapper">
	
	<div class="col">
		<div class="heading">
			<p class="slug">Why Choose Us?</p>
			<div class="animation_container">
				<div bind:this={title} class="title">
					{#each header as item}
						<span class="animate_me_title">{item}</span>
						<span />
					{/each}
				</div>
			</div>
			<p class="description">
				We are a team of dedicated and passionate teachers who are passionate about teaching to help
				students achieve their goals. What sets us apart is the time and effort we put into our
				teaching. We understand that the best way to teach is to teach the best way to learn and the
				struggles students have to go through in learning new skills. Our courses are tailored to
				the needs of the students and we are here to help you achieve your goals.
			</p>
		</div>
	</div>
	<div class="col">
		<div class="block">
			<p class="title">01. Experienced and Passionate Teachers</p>
			<p class="description">
				Our teachers are passionate about what they teach and are dedicated to providing the best
				possible experience for our students. They are experienced in their respective fields and
				are focused about guiding you through developing a new skillset with dedication, empathy and
				passion.
			</p>
		</div>
		<div class="block">
			<p class="title">02. Affordable Prices</p>
			<p class="description">
				We offer affordable prices for our courses so that you can focus on your goals and not worry
				about the wrecking your wallet. We don't want money to come in between you and your goals.
				Offering you a great experience and a great price is what we are all about.
			</p>
		</div>
		<div class="block">
			<p class="title">03. Detailed and Quality Courses</p>
			<p class="description">
				Our courses are tailored to suit your needs. Our courses are designed to teach you the
				fundamentals of the subject you are interested in so you can get on your feet quickly and
				get the most out of your precious time. We are here to help you achieve your goals.
			</p>
		</div>
	</div>
</div>

<style>
	.animation_container {
		height: fit-content;
		overflow: hidden;
	}
	span {
		display: inline-block;
	}
	.wrapper {
		width: 100%;
		height: fit-content;
		display: flex;
		padding: var(--padding);
		gap: 4rem;
		background-color: #dfdff7;
		color: var(--dark-green);
	}
	.col {
		width: 50%;
		height: 100%;
		padding: 4rem 0;
	}
	.col:nth-child(2) {
		display: flex;
		flex-direction: column;
	}
	.heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
	.slug {
		font-size: 0.8rem;
		font-weight: 500;
		background-color: var(--dark-green);
		width: fit-content;
		color: #dfdff7;
		padding: 0.5rem 1rem;
		border-radius: 50px;
	}
	.title {
		font-size: 2rem;
		font-weight: 500;
		font-family: 'Poppins', 'sans-serif';
		width: 75%;
		height: fit-content;
		color: #00004c;
	}
	.description {
		line-height: 30px;
		opacity: 0.7;
	}
	.block .title {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-bottom: 1px solid #c7c7f8;
		padding: 3rem 0;
	}
	.block:last-child {
		border-bottom: transparent;
	}
	@media (max-width: 900px) {
		.wrapper {
			flex-direction: column;
			gap: 0;
			padding: var(--padding-mobile);
		}
		.col {
			width: 100%;
		}
		.col:nth-child(1) {
			padding: 4rem 0 2rem 0;
		}
		.col:nth-child(2) {
			padding: 0 0 4rem 0;
		}
		.title {
			width: 100%;
		}
	}
</style>
