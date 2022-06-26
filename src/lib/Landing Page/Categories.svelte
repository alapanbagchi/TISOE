<script>
	import CategoryBlock from './CategoryBlock.svelte';
    import categories from "../../data/categories";

</script>

<div class="wrapper">
	<div class="section_description">
		<p class="about">Categories</p>
		<p class="heading">
			A <span class="underline">Robust</span> Selection of <span class="underline">Courses</span>
			<br />to choose from
		</p>
		<p class="description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, aperiam qui sint ipsam
			quibusdam doloremque tenetur aliquid saepe deleniti laborum quam, veritatis laudantium omnis
			optio debitis, aliquam quas impedit!
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
		padding: 8em 8em 0 8em;
		margin-bottom: 5em;
	}
	.section_description {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-direction: column;
	}
	.heading {
		width: fit-content;
		font-size: 2.5rem;
		font-weight: 600;
		color: #3f2845;
		text-align: center;
		position: relative;
	}
	.about {
		font-size: 1rem;
		font-weight: 600;
		color: var(--dark-green);
	}
	.description {
		text-align: center;
		opacity: 0.5;
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 30px;
		font-family: 'Inter';
		margin-top: 0.5rem;
		width: 80%;
	}
	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fill,minmax(30rem,1fr));
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
