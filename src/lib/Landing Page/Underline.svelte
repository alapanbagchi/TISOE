<div class="wrapper">
    <span><slot></slot></span>
</div>

<style>
    .wrapper{
        width: fit-content;
        position: relative;
    }
    .wrapper span:before {
		display: block;
		content: '';
		position: absolute;
        width: fit-content;
        height: 10px;
        top: 0.8em;
        left:-2.5px;
        z-index: -1;
		background-color: var(--dark-yellow);
	}
</style>