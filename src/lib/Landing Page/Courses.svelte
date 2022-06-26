<script>
	import CourseBlock from './CourseBlock.svelte';
</script>

<div class="wrapper">
	<div class="section_description">
		<p class="about">Courses</p>
		<p class="heading">
			<span class="underline">Carefully</span> Crafted <span class="underline">Courses</span>
			<br />For Your Needs
		</p>
		<p class="description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, aperiam qui sint ipsam
			quibusdam doloremque tenetur aliquid saepe deleniti laborum quam, veritatis laudantium omnis
			optio debitis, aliquam quas impedit!
		</p>
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
		padding: 0 8em 0 8em;
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
	.courses {
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
		justify-content: space-between;
		grid-gap: 3em;
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
