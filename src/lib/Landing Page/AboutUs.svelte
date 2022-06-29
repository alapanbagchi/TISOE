<div class="wrapper">
	<div class="col">
		<div class="heading">
			<p class="slug">Why Choose Us?</p>
			<p class="title">Why are we the best and why you <br />should choose us?</p>
			<p class="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur laudantium
				vitae expedita, voluptatibus molestias quo sequi dolor, debitis eaque excepturi? Dolores
				fugit aliquam enim consequatur exercitationem ipsa minima quo! Magni officia animi nostrum
				recusandae eveniet voluptate perspiciatis, quod expedita nihil iusto qui nobis corrupti sunt
				molestiae sint facere optio aperiam non reprehenderit, est consequatur unde et! Iusto, minus
				voluptatem!
               
			</p>
		</div>
  
	</div>
	<div class="col">
		<div class="block">
			<p class="title">01. Experienced & Globaly certified world class tutors</p>
			<p class="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores distinctio
				architecto officiis minus sed deserunt voluptatibus perferendis aliquam unde quidem quo,
				excepturi, iure voluptatum magnam ipsum quae est nemo!
			</p>
		</div>
		<div class="block">
			<p class="title">01. Experienced & Globaly certified world class tutors</p>
			<p class="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores distinctio
				architecto officiis minus sed deserunt voluptatibus perferendis aliquam unde quidem quo,
				excepturi, iure voluptatum magnam ipsum quae est nemo!
			</p>
		</div>
		<div class="block">
			<p class="title">01. Experienced & Globaly certified world class tutors</p>
			<p class="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolores distinctio
				architecto officiis minus sed deserunt voluptatibus perferendis aliquam unde quidem quo,
				excepturi, iure voluptatum magnam ipsum quae est nemo!
			</p>
		</div>
		
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		display: flex;
		padding: var(--padding);
		gap: 4rem;
        background-color: #DFDFF7;
        color: var(--dark-green);
	}
	.col {
		width: 50%;
		height: 100%;
		padding: 4rem 0;
	}
	.col:nth-child(2) {
		display: flex;
		flex-direction: column;
	}
	.heading {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
    .slug{
        font-size: 0.8rem;
        font-weight: 500;
        background-color: var(--dark-green);
        width: fit-content;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 50px;
    }
	.title {
		font-size: 2rem;
		font-weight: 500;
		font-family: 'Poppins', 'sans-serif';
	}
	.description {
		line-height: 30px;
		opacity: 0.7;
	}
	.block .title {
		font-size: 1.5rem;
		font-weight: 500;
	}

	.block {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		border-bottom: 1px solid #c7c7f8;
		padding: 2rem 0;
	}
    .block:last-child {
		
		border-bottom:  transparent;
	}
	
    
</style>
