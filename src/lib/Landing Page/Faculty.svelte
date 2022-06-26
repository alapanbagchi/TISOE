<script>


</script>

<div class="wrapper">
	<div class="section_description">
		<p class="about">Faculty</p>
		<p class="heading">
			Meet Our <span class="underline">Experienced</span> Faculty
		</p>
		<p class="description">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad expedita sit, voluptates ipsam
			architecto dolores esse? Voluptas accusantium consequatur possimus animi eum, officiis
			consequuntur iste laborum ipsam expedita at quia?
		</p>
	</div>
	<div class="faculty">
		<div class="image">
			<img
				src="https://alapanbagchi.github.io/teducal/assets/img/tatiyana.jpg"
				alt="categories"
			/>
		</div>
		<div class="content">
			<div class="header">
				<div class="container">
					<p class="title">Tatyana Iliev</p>
					<button>See More</button>
				</div>
				<div class="tags">Art & Design</div>
			</div>
			<div class="description">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestias minus, recusandae
					iure voluptatibus magni optio. Fuga deleniti ipsum, odit similique necessitatibus
					repudiandae sunt cum? Sit voluptatem corporis praesentium ratione. Tempora assumenda,
					suscipit non amet unde voluptatum dignissimos possimus quis cupiditate sed perspiciatis
					earum debitis nostrum commodi maxime pariatur, eveniet cum recusandae aspernatur beatae
					architecto dolorum! Explicabo error rerum optio! Nostrum sed quisquam dolorem et? Iste
					omnis dolor quos provident mollitia, incidunt molestias voluptas ipsum laboriosam ratione
					exercitationem eum distinctio odio impedit, alias ad, doloribus a? Dolorem ratione quas
					vitae.
				</p>
			</div>
			<p class="title" style="font-size:1.3rem">Courses</p>
			<div class="courses">
				<div class="course">
					<div class="head">
						<p class="title">01</p>
						<p>Landscapes</p>
					</div>
					<p class="price">$30.00</p>
				</div>
				<div class="course">
					<div class="head">
						<p class="title">01</p>
						<p>Landscapes</p>
					</div>
					<p class="price">$30.00</p>
				</div>
				<div class="course">
					<div class="head">
						<p class="title">01</p>
						<p>Landscapes</p>
					</div>
					<p class="price">$30.00</p>
				</div>
				<div class="course">
					<div class="head">
						<p class="title">01</p>
						<p>Landscapes</p>
					</div>
					<p class="price">$30.00</p>
				</div>
				<div class="course">
					<div class="head">
						<p class="title">01</p>
						<p>Landscapes</p>
					</div>
					<p class="price">$30.00</p>
				</div>
				
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		padding: 8em 8em 0 8em;
		overflow: hidden;
	}
	.section_description {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		flex-direction: column;
	}
	.section_description .description {
		text-align: center;
		opacity: 0.5;
		font-size: 1.1rem;
		font-weight: 500;
		line-height: 30px;
		font-family: 'Inter';
		margin-top: 0.5rem;
		width: 80%;
	}
	.heading {
		width: 100%;
		font-size: 2.5rem;
		font-weight: 600;
		color: #3f2845;
		text-align: center;
		position: relative;
	}
	.content {
		display: flex;
		width: 100%;
		flex-direction: column;
		gap: 1rem;
		padding: 0 2rem;
	}
	.header {
		width: 100%;
		justify-content: space-between;
	}
	.container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.tags {
		background-color: var(--light-yellow);
		color: var(--dark-yellow);
		font-weight: 600;
		width: fit-content;
		padding: 0.4rem 0.8rem;
		margin-top: 1rem;
		font-size: 0.8rem;
		border-radius: 7px;
	}
	.title {
		font-size: 1.6rem;
		font-weight: 500;
	}
	.courses {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow: hidden;
	}
	.course {
		border: 1px solid var(--light-green);
		padding: 0.5rem 0.6rem;
		border-radius: 7px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.price {
		font-weight: 600;
		color: var(--dark-green);
	}
	.head {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-weight: 500;
	}
	.head .title {
		background-color: var(--light-green);
		width: fit-content;
		font-size: 1rem;
		color: var(--dark-green);
		padding: 0.6rem;
		border-radius: 100%;
		font-weight: 600;
	}
	.description {
		font-size: 1rem;
		opacity: 0.7;
		font-weight: 400;
		color: #3f2845;
		line-height: 2;
		margin-top: 1rem;
	}
	button {
		background-color: var(--light-green);
		border: none;
		border-radius: 7px;
		color: var(--dark-green);
		font-size: 0.9;
		font-weight: 600;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
	.about {
		font-size: 1rem;
		font-weight: 600;
		color: var(--dark-green);
	}
	.faculty {
		width: 100%;
        height: 70vh;
		display: flex;
		margin-top: 2rem;
	}
	.image {
		min-width: 30%;
		height: 100%;
		display: flex;
		overflow: hidden;
	}
	.image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
