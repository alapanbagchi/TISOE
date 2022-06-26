<script>
	import Underline from './Underline.svelte';
</script>

<div class="wrapper">
	<div class="logo">
		<p>
			<svg
				id="MDI_bookshelf"
				data-name="MDI / bookshelf"
				xmlns="http://www.w3.org/2000/svg"
				width="30.035"
				height="30.841"
				viewBox="0 0 30.035 30.841"
			>
				<g id="Boundary" fill="#141c24" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
					<rect width="30.035" height="30.841" stroke="none" />
					<rect x="0.5" y="0.5" width="29.035" height="29.841" fill="none" />
				</g>
				<path
					id="Path_bookshelf"
					data-name="Path / bookshelf"
					d="M11.012,3V23.7h4.006V3H11.012m4.006,2.76L20.358,23.7l4.006-1.38L19.023,4.38,15.017,5.76m-9.347,0V23.7H9.676V5.76H5.671M3,25.081v2.76H27.035v-2.76Z"
					fill="#141c24"
				/>
			</svg>
			Tisoe
		</p>
	</div>
	<div class="links">
		<ul>
			<li>About Us</li>
			<li>Categories</li>
			<li>Courses</li>
			<li>Testimonials</li>
		</ul>
	</div>
	<button>
		Contact Us </button>
</div>

<style>
	.wrapper {
		display: flex;
		width: 100%;
		height: 120px;
		padding: 0 8em;
		align-items: center;
		font-family: 'Roboto', sans-serif;
		align-items: center;
		justify-content: space-between;
		background-color: white;
		position: fixed;
		z-index: 999999;
		top: 0;
	}
	.logo p{
		font-size: 1.4rem;
		font-weight: 800;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.links {
		width: fit-content;
		height: fit-content;
		display: flex;
		align-items: center;
	}
	.links ul {
		list-style: none;
		display: flex;
		gap: 2em;
		font-weight: 600;
		font-size: 0.95rem;
		align-items: center;
		margin-top: 10px;
	}
	.links ul li {
		opacity: 0.5;
		border-bottom: 4px solid transparent;
		padding-bottom: 10px;
	}
	.links ul li:hover {
		opacity: 1;
		border-bottom: 4px solid var(--dark-green);
		padding-bottom: 10px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;
	}
	button {
		background: var(--dark-green);
		color: var(--light-green);
		border: none;
		border-radius: 5px;
		padding: 1em 2em;
		font-size: 0.8rem;
		font-weight: 700;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.6em;
	}
	button:hover{
		background-color: var(--black);
		color: var(--dark-green);
		transition: all 0.1s ease-in-out;
	}
</style>
