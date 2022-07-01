<script>
	import CategoryBlock from './CategoryBlock.svelte';
	import categories from '../../data/categories';
</script>

<div class="wrapper">
	<div class="section_description">
		<div class="block">
			<p class="about">Categories</p>
			<p class="heading">A lot of categories are available for you to choose from.</p>
		</div>
		<p class="description">
			We offer a wide range of categories for you to choose from. We are still working on adding more categories and diversifying our offerings but we are sure you will find something that suits your needs. All you need to do is click on the category you want to learn and you will be taken to the courses page.
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
	.block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.heading {
		width: fit-content;
		font-size: 2rem;
		font-weight: 500;
		color: var(--dark-green);
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
		font-size: 1rem;
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
		overflow: hidden;
	}

	@media (max-width: 900px) {
		.wrapper {
			flex-direction: column;
			gap: 0;
			padding: var(--padding-mobile);
		}
		.heading{
			font-size: 1.8rem;
		}
		.description{
			margin-top: 2rem;
		}
		.section_description{
			flex-direction: column;
			gap: 0;
		}
		.categories{
			display: flex;
			flex-direction: column;
		}
		.description{
			width: 100%;
		}
		
	}
</style>
