
<div class="wrapper">
	<div class="image">
		<img
			src="https://images.unsplash.com/photo-1550450339-e7a4787a2074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=952&q=80 952w"
			alt=""
		/>
	</div>
	<div class="content">
		<div class="header">
			<p class="topic">Landscapes</p>
			<p class="price">$30.00</p>
		</div>
		<div class="description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius nesciunt tempore ipsum,
			laboriosam
		</div>
		<div class="footer">
			<div class="author">
				<div class="avatar">
					<img
						src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80 785w"
						alt=""
					/>
				</div>
				<p>Tatyana</p>
			</div>
			<p>See More ></p>
		</div>
	</div>
</div>

<style>
	.wrapper {
        width: 100%;
		height: fit-content;
		border-radius: 7px;
		overflow: hidden;
		border-radius: 7px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		border: 1px solid #99c7a8;
		color: var(--dark-green);

	}
	.wrapper:hover {
		box-shadow:  0px 0px 10px 0px #c4def5;
		transition: all 0.3s ease-in-out;
		background-color: var(--dark-green);
		color: white;
	}
	.image {
		width: 100%;
		overflow: hidden;
		height: 200px;
	}
	.image img {
		width: 100%;
		height: 100%;
	}
	.content {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 2rem 2rem;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 600;
	}
	.price {
		color: #2e6101;
		font-size: 1rem;
	}
	.wrapper:hover .price{
		color: #75da1e;
	}
	.description {
		opacity: 0.6;
		font-weight: 500;
		font-size: 0.9rem;
		line-height: 25px;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
        padding-top: 0.5rem;
	}
	.avatar {
		width: 30px;
		height: 30px;
		border-radius: 100%;
		overflow: hidden;
	}
	.author {
		display: flex;
		align-items: center;
		gap: 1em;
		font-size: 0.9rem;
		font-weight: 600;
	}
	.avatar img {
		width: 100%;
		height: 100%;
	}
	.footer > p {
		font-size: 0.9rem;
		font-weight: 600;
	}
</style>
