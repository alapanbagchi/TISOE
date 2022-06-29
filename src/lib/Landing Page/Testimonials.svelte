<script>
	import CourseBlock from './CourseBlock.svelte';
	$: filter = 'all'
</script>

<div class="wrapper">
	<div class="section_description">
		<div class="block">
			<p class="about">Testimonials</p>
			<p class="heading">
				A Robust Selection of Courses to choose from
			</p>
		</div>
		<p class="description">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam ducimus commodi dolores quo labore aperiam nihil fugit aliquid quia temporibus, cupiditate harum architecto esse aut velit adipisci dolor cum.
			Temporibus ea ratione quibusdam facere quia! Vero alias quaerat quis velit! Cum labore quaerat non animi voluptates reiciendis, culpa, magni aliquid modi atque eaque odit at, dolorum quibusdam incidunt ipsa.
		</p>
	</div>
	
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		padding: 5rem; 
		background-color: #fffcca;
	}
	.section_description {
		display: flex;
		gap: 0.5rem;
	}
	.block{
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.heading {
		width: fit-content;
		font-size: 2.5rem;
		font-weight: 600;
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

</style>
