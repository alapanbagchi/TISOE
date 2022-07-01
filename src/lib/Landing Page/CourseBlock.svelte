<script lang="ts">
	export let title: string;
	export let price: number;
	export let description: string;
	export let banner: string;
	export let author: string;
	export let avatar: string;
</script>

	<div class="wrapper">
		<div class="image">
			<img src={banner} alt="" />
		</div>
		<div class="content">
			<div class="header">
				<p class="topic">{title}</p>
				<p class="price">${price}/hr</p>
			</div>
			<div class="description">
				{description.substring(0, 100)}
			</div>
			<div class="footer">
				<div class="author">
					<div class="avatar">
						<img src={avatar} alt="" />
					</div>
					<p>{author}</p>
				</div>
				<p>See More ></p>
			</div>
		</div>
	</div>

<style>
	.wrapper {
		width: 100%;
		max-width: 400px;
		height: fit-content;
		max-height: 430px;
		border-radius: 7px;
		overflow: hidden;
		border-radius: 7px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		border: 1px solid #2e611d36;
		box-shadow: 0px 0px 10px #2e611d36;
		color: var(--dark-green);
		transition: all 0.3s ease-in-out;
	}
	.wrapper:hover .image img {
		transform: scale(1.3);
		transition: all 0.3s ease-in-out;
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
	@media (max-width: 900px) {
		.content {
			padding: 1rem;
		}
	}
</style>
