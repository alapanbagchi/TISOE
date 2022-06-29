<script>
	import CategoryBlock from './CategoryBlock.svelte';
	import categories from '../../data/categories';
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
	<div class="categories">
		{#each categories as category}
			<CategoryBlock title={category.name} description={category.description} svg={category.svg} />
		{/each}

	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		padding: var(--padding);
		margin: 5rem 0;
		margin-bottom: 5em;
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
		font-size: 2rem;
		font-weight: 500;
		color: #3f2845;
		position: relative;
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
	.description {
		opacity: 0.5;
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 30px;
		font-family: 'Inter';
		margin-top: 3rem;
		width: 80%;
	}
	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
		justify-content: space-between;
		margin-top: 2rem;
		gap: 2em;
	}

	.underline {
		width: fit-content;
		position: relative;
	}
	.underline:before {
		display: block;
		content: '';
		position: absolute;
		width: 100%;
		left: 1px;
		bottom: 5px;
		height: 12px;
		z-index: -1;
		background-color: #46ecb8;
	}
</style>
