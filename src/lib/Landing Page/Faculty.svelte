<script>
	import CourseBlock from './CourseBlock.svelte';
	$: filter = 'all';
</script>

<div class="wrapper">
	<div class="section_description">
		<div class="block">
			<p class="about">Categories</p>
			<p class="heading">A Robust Selection of Courses to choose from</p>
		</div>
		<p class="description">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam ducimus commodi
			dolores quo labore aperiam nihil fugit aliquid quia temporibus, cupiditate harum architecto
			esse aut velit adipisci dolor cum. Temporibus ea ratione quibusdam facere quia! Vero alias
			quaerat quis velit! Cum labore quaerat non animi voluptates reiciendis, culpa, magni aliquid
			modi atque eaque odit at, dolorum quibusdam incidunt ipsa.
		</p>
	</div>
	<div class="content">
		{#each ['','','','','','','','',''] as image}
		<div class="slide">
			
			<img
				src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80 387w"
				alt=""
			/>
			
		</div>
		{/each}
	</div>
</div>

<style>

	.slide {
		border-radius: 7px;
		overflow: hidden;
		position: relative;
	}
	.data{
		width: 100%;
		height: 30%;
		background-color: wheat;
		position: absolute;
		bottom: 0;
		padding: 1rem;
	}
	.slug{
		font-size: 0.8rem;
		font-weight: 400;
		background-color: var(--dark-green);
		height: fit-content;
		width: fit-content;
		color: white;
		padding: 0.3rem 0.8rem;
		border-radius: 50px;
	}
	.title{
		font-size: 1.2rem;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
	
	.content {
		display: flex;
		overflow: hidden;
	}
	.slide {
		min-width: 33%;
		height: 100%;
		background-color: #dfdff7;
	}

	.wrapper {
		width: 100%;
		height: fit-content;
		padding: 5rem;
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
	.content {
		width: 100%;
		height: 70vh;
		margin-top: 4rem;
		display: flex;
		gap: 3rem;
	}
</style>
