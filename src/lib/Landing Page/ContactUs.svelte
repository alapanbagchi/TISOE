<script>
	import CourseBlock from './CourseBlock.svelte';
	$: filter = 'all';
</script>

<div class="wrapper">
	<div class="section_description">
		<div class="block">
			<p class="about">Contact Us</p>
			<p class="heading">Send us an email and we will get back to you as soon as possible.</p>
		</div>
		<p class="description">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam ducimus commodi
			dolores quo labore aperiam nihil fugit aliquid quia temporibus, cupiditate harum architecto
			esse aut velit adipisci dolor cum. Temporibus ea ratione quibusdam facere quia! Vero alias
			quaerat quis velit! Cum labore quaerat non animi voluptates reiciendis, culpa, magni aliquid
			modi atque eaque odit at, dolorum quibusdam incidunt ipsa.
		</p>
	</div>
	<div class="btn-group">
		<button>I want to join as a student</button>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		padding: 5rem;
		background-color: rgba(170, 192, 177, 0.384);
	}
	.section_description {
		display: flex;
		gap: 0.5rem;
	}
	.block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.heading {
		width: fit-content;
		font-size: 2.5rem;
		font-weight: 600;
		color: var(--dark-green);
		position: relative;
	}
	.about {
		font-size: 1rem;
		font-weight: 600;
		color: var(--dark-green);
	}
	.description {
		opacity: 0.5;
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 30px;
		font-family: 'Inter';
		margin-top: 3rem;
		width: 80%;
	}
	.about {
		font-size: 0.8rem;
		font-weight: 500;
		background-color: var(--dark-green);
		width: fit-content;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 50px;
	}
	.btn-group{
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 3rem;
	}
	button{
		width: fit-content;
		padding: 1rem 1rem;
		border-radius: 7px;
		background-color: var(--dark-green);
		color: white;
		font-size: 0.9rem;
		font-weight: 500;
		margin-top: 1rem;
		margin-bottom: 1rem;
		cursor: pointer;
	}
</style>
