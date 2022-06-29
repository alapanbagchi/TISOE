<script>
	import CourseBlock from './CourseBlock.svelte';
</script>

<div class="wrapper">
	<div class="section_description">
		<p class="about">Contact Us</p>
		<p class="heading">
			Send us an Email and we will <br />get back to you as soon as possible
		</p>
		<p class="description">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto itaque, aperiam qui sint ipsam
			quibusdam doloremque tenetur aliquid saepe deleniti laborum quam, veritatis laudantium omnis
			optio debitis, aliquam quas impedit!
		</p>
	</div>
	<button class="cta">
        Contact Us
    </button>
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
    .cta{
        padding: 1rem 3rem;
        background-color: var(--dark-green);
        color: var(--light-green);
        font-weight: 600;
        outline: none;
        border: none;
        cursor: pointer;
        margin-left: auto;
        display: flex;
        margin-right: auto;
        margin-top: 2em;
        border: 7px;
        margin-bottom: 4rem;
    }
    .cta:hover{
        background-color: var(--black);
        color: var(--dark-green);
        transition: all 0.3s ease-in-out;
    }
</style>
