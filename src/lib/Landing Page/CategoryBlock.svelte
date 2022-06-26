<script lang="ts">
    export let title:string
    export let description:string
    export let svg:string
</script>
<div class="category">
    <div class="header">
        <div class="logo">
            {@html svg}
        </div>
        <p>{title}</p>
    </div>
    <p class="description">{description.substring(0,100)}...</p>
    <p class="cta">Learn More</p>
</div>

<style>
    .category{
        width: 100%;
        flex-grow: 1;
        padding: 2em 2em;
        border-radius: 7px;
        border: 1px solid var(--light-green);
        gap: 1em;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    .header{
        display:flex;
        align-items:center;
        gap: 1em;
        font-weight: 600;
        color:var(--black)
    }
    .header .logo{
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
        padding: 0.5rem ;
        background-color: var(--light-green);
    }
    .description{
        opacity:0.6;
        font-weight: 500;
        font-size: 1rem;
        line-height: 25px;
    }
    .cta{
        width: fit-content;
        font-size:0.9em;
        background-color: transparent;
        outline: none;
        border: none;
        color: var(--dark-green);
        font-weight: 600;
    }
    .category:hover{
        background-color: var(--dark-green);
        transition: all 0.3s ease-in-out;
    }
    .category:hover .header, .category:hover .description, .category:hover .cta{
        color: #fff;
        transition: all 0.3s ease-in-out;
    }
   
</style>