<script>
	import CategoryBlock from './CategoryBlock.svelte';
	import categories from '../../data/categories';
	import TestemonialBlock from './TestemonialBlock.svelte';
</script>

<div class="wrapper">
	<div class="section_description">
		<p class="about">Testimonials</p>
		<p class="heading">
			See What Our <span class="underline">Learners</span><br />
			Have To Say About <span class="underline">TISOE</span>
		</p>
		<p class="description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, aperiam qui sint ipsam
			quibusdam doloremque tenetur aliquid saepe deleniti laborum quam, veritatis laudantium omnis
			optio debitis, aliquam quas impedit!
		</p>
	</div>
	<div class="testimonials">
		<TestemonialBlock />
		<TestemonialBlock />
		<TestemonialBlock />

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
	.testimonials {
		display: flex;
        gap: 2rem;
        flex-direction: column;
        margin-top: 2rem;
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
