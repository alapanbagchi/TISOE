<script>
	import '../app.css';
	import Hero from '$lib/Landing Page/Hero.svelte';
	import Header from '$lib/Landing Page/Header.svelte';
	import AboutUs from '$lib/Landing Page/Categories.svelte';
	import Categories from '$lib/Landing Page/Categories.svelte';
	import Courses from '$lib/Landing Page/Courses.svelte';
	import Faculty from '$lib/Landing Page/Faculty.svelte';
	import Testimonials from '$lib/Landing Page/Testimonials.svelte';
	import ContactUs from '$lib/Landing Page/ContactUs.svelte';
</script>

<Header />
<Hero />
<div class="imgwrapper">
	<div class="imageblock">
		<p class="topic">Our Popular Courses</p>
		<div class="divider" />
		<div class="block" style="padding-bottom:1em">
			<div class="icon">
				<svg
					id="MDI_brush"
					data-name="MDI / brush"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
				>
					<g id="Boundary" fill="#ffffff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
						<rect width="24" height="24" stroke="none" />
						<rect x="0.5" y="0.5" width="23" height="23" fill="none" />
					</g>
					<path
						id="Path_brush"
						data-name="Path / brush"
						d="M20.71,4.63,19.37,3.29a1,1,0,0,0-1.41,0L9,12.25,11.75,15l8.96-8.96a1,1,0,0,0,0-1.41M7,14a3,3,0,0,0-3,3,2.029,2.029,0,0,1-2,2,5.189,5.189,0,0,0,4,2,4,4,0,0,0,4-4,3,3,0,0,0-3-3Z"
						transform="translate(0 0.003)"
						fill="#ffffff"
					/>
				</svg>
			</div>
			<p>Landscapes</p>
		</div>
		<div class="block" style="padding-bottom:1em">
			<div class="icon">
				<svg
					id="MDI_code-tags"
					data-name="MDI / code-tags"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
				>
					<g id="Boundary" fill="#ffffff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
						<rect width="24" height="24" stroke="none" />
						<rect x="0.5" y="0.5" width="23" height="23" fill="none" />
					</g>
					<path
						id="Path_code-tags"
						data-name="Path / code-tags"
						d="M14.6,16.6,19.2,12,14.6,7.4,16,6l6,6-6,6-1.4-1.4m-5.2,0L4.8,12,9.4,7.4,8,6,2,12l6,6Z"
						fill="#ffffff"
					/>
				</svg>
			</div>
			<p>Web Development Basics</p>
		</div>
		<div class="block">
			<div class="icon">
				<svg
					id="MDI_ideogram-cjk-variant"
					data-name="MDI / ideogram-cjk-variant"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
				>
					<g id="Boundary" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
						<rect width="24" height="24" stroke="none" />
						<rect x="0.5" y="0.5" width="18" height="18" fill="none" />
					</g>
					<path
						id="Path_ideogram-cjk-variant"
						data-name="Path / ideogram-cjk-variant"
						d="M11,4V6H4V8H15.36a7.326,7.326,0,0,1-1.48,2.69A20.094,20.094,0,0,1,12,12.67a20.094,20.094,0,0,1-1.88-1.98A8.585,8.585,0,0,1,9.03,9H6.85a9.909,9.909,0,0,0,1.71,2.95A19.538,19.538,0,0,0,10.5,14L5.36,18.23l1.28,1.54L12,15.34l5.36,4.43,1.28-1.54L13.5,14a19.538,19.538,0,0,0,1.94-2.05A8.759,8.759,0,0,0,17.4,8H20V6H13V4Z"
						fill="#fff"
					/>
				</svg>
			</div>
			<p>Chinese for beginners</p>
		</div>
		<button>See More</button>
		<div class="icon2">
			<svg
				id="MDI_bookshelf"
				data-name="MDI / bookshelf"
				xmlns="http://www.w3.org/2000/svg"
				width="25"
				height="25"
				viewBox="0 0 28.871 27.82"
			>
				<g id="Boundary" fill="#fff" stroke="rgba(0,0,0,0)" stroke-width="1" opacity="0">
					<rect width="28.871" height="27.82" stroke="none" />
					<rect x="0.5" y="0.5" width="27.871" height="26.82" fill="none" />
				</g>
				<path
					id="Path_bookshelf"
					data-name="Path / bookshelf"
					d="M10.624,3V21.183h3.812V3H10.624m3.812,2.424,5.082,15.759,3.812-1.212L18.247,4.212,14.435,5.424m-8.894,0V21.183H9.353V5.424H5.541M3,22.4V24.82H25.871V22.4Z"
					transform="translate(0 0)"
					fill="#fff"
				/>
			</svg>
		</div>
	</div>
	<img
		src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80 2670w"
		alt=""
	/>
</div>
<Categories />
<Courses />
<Faculty />
<Testimonials />

<style>
	.imgwrapper {
		width: calc(100% - 8em);
		height: 80vh;
		overflow: hidden;
		margin-top: -2%;
		z-index: -1;
	}
	img {
		width: 100%;
		margin-left: 8em;
		height: 100%;
		object-fit: cover;
	}
	.imageblock {
		position: absolute;
		padding: 1em 2em;
		box-shadow: 0px 0px 10px #31312f;
		left: 10%;
		display: flex;
		flex-direction: column;
		margin-top: -3rem;
		z-index: 2;
		background-color: var(--black);
		color: white;
		padding: 1em 2em 0em 2em;
		left: 8%;
		box-shadow: none;
		z-index: 2;
	}

	.imageblock .topic {
		color: white;
		text-align: center;
		margin-bottom: 0;
	}
	.topic {
		font-size: 1rem;
		font-weight: 500;
		color: #31312f;
		margin-bottom: 1em;
	}
	.block {
		display: flex;
		align-items: center;
		gap: 1em;
		font-size: 0.95rem;
	}
	.divider {
		margin-top: 0.1em;
		border-bottom: 1px solid rgba(255, 255, 255, 0.137);
		margin: 1em 0;
	}
	.icon {
		padding: 0.5em;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--dark-green);
		width: fit-content;
		height: fit-content;
		border-radius: 100%;
	}
	.icon2 {
		padding: 0.5em 0.8rem;
		background-color: var(--black);
		border-radius: 7px;
		width: fit-content;
		height: fit-content;
		color: #fff;
		font-weight: 700;
		position: absolute;
		top: calc(100% - 1.5rem);
		left: calc(100% - 1.5rem);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.imageblock .icon2 {
		padding: 0.5em 0.6rem;
		top: -1rem;
		left: -1rem;
		background-color: var(--dark-green);
	}
	.imageblock button {
		padding: 1.5em 0;
		background-color: var(--black);
		color: white;
		outline: none;
		border: none;
		border-top: 1px solid rgba(255, 255, 255, 0.13);
		margin-top: 2em;
		cursor: pointer;
	}
</style>
