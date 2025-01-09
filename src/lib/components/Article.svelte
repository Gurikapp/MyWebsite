<script>
	export let content;
	export let imageUrl;
	export let maxTextHeight = 200; // Максимальная высота текста, после которой будет обрезка

	let isExpanded = false;

	function toggleExpand() {
		isExpanded = !isExpanded;
	}
</script>

<div class="article" on:click={toggleExpand}>
	<div
	  class="article-content"
	  style="max-height: {isExpanded
		? 'none'
		: `${maxTextHeight}px`}; overflow: hidden; text-overflow: ellipsis;"
	>
	  {#each content as paragraph}
		<p>{paragraph}</p>
	  {/each}
	</div>
	
	{#if !isExpanded}
	  <span class="read-more">Читать дальше...</span>
	{/if}
	
	<img class="blackAndWhiteFilter" src="/images/vbros/{imageUrl}" alt="" />
  </div>

<style lang="scss">
	@use '/src/routes/blackAndWhiteFilter.scss';

	.article {
		border: 1px solid #ffffff66;
		padding: 16px;
		display: flex;
		flex-direction: column;
		cursor: pointer;
		transition: 500ms;
		background-image: url(/images/Block2_Back.png);
		&:hover {
		border: 1px solid #ffffff9c;
	}
	}

	.article img {
		width: 500px;
		margin-bottom: 16px;
		@media (max-width: 400px) {
					width: 90%;
				}
	}

	.read-more {
		color: #a0a0a0;
		font-family: 'Amatic SC', serif;
		font-weight: 700;
		font-style: normal;
		font-size: 35px;
		padding: 10px 0px;
		cursor: pointer;
		transition: 300ms;
		&:hover{
			color: #c7c7c7;
		}
	}

	.article-content {
		color: white;
		font-family: "Caveat", cursive;
		font-weight: 400;
		font-style: normal;
		font-size: 30px;
	}

	.article-content p {
    margin: 0 0 1em;
  }
</style>
