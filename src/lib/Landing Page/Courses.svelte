<script>
	import CourseBlock from './CourseBlock.svelte';
	$: filter = 'all'
</script>

<div class="wrapper">
	<div class="section_description">
		<div class="block">
			<p class="about">Categories</p>
			<p class="heading">
				A Robust Selection of Courses to choose from
			</p>
		</div>
		<p class="description">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quisquam ducimus commodi dolores quo labore aperiam nihil fugit aliquid quia temporibus, cupiditate harum architecto esse aut velit adipisci dolor cum.
			Temporibus ea ratione quibusdam facere quia! Vero alias quaerat quis velit! Cum labore quaerat non animi voluptates reiciendis, culpa, magni aliquid modi atque eaque odit at, dolorum quibusdam incidunt ipsa.
		</p>
	</div>
	<div class="filters">
		<button on:click={()=>{filter = 'all'}} class="{filter == 'all' ? 'active' : ''}">All</button>
		<button on:click={()=>{filter = 'art'}} class="{filter == 'art' ? 'active' : ''}">Art</button>
		<button on:click={()=>{filter = 'language'}} class="{filter == 'language' ? 'active' : ''}">Language</button>
		<button on:click={()=>{filter = 'coding'}} class="{filter == 'coding' ? 'active' : ''}">Coding</button>
	</div>
	<div class="courses">
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
		<CourseBlock />
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
	.block{
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
	.courses {
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
		justify-content: space-between;
		grid-gap: 3em;
		margin-top: 2rem;
	}
	
	.filters{
		display: flex;
		gap: 1rem;
		width: 100%;
		margin-top: 2rem;
	}
	.filters button{
		background-color: transparent;
		border: 1px solid var(--dark-green);
		color: black;
		padding: 0.5rem 1rem;
		border-radius: 50px;
		font-size: 0.8rem;
		font-weight: 500;
		cursor: pointer;
	}
	.active{
		color: white !important;
		background-color: var(--dark-green) !important;
	}
</style>
