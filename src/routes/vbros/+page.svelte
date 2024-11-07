<script>
	import { goto } from '$app/navigation';
	import { articles } from '$lib/data/VbrosArticles.js';
	import Article from '$lib/components/Article.svelte';
</script>

<svelte:head>
	<title>Филиал Вброса</title>
</svelte:head>

<section class="articles">
	<div class="navbar">
		<div class="navbar-btns">
			<button type="button" on:click={() => goto('/finrod')}>Стихи Финрода Фелагунда</button>
			<a type="button" href="https://t.me/grassyart">Автор большинства фотографий к вбросам</a>
		</div>
	</div>

	{#each articles as article}
		<Article content={article.content} imageUrl={article.imageUrl} />
	{/each}
</section>

<style lang="scss">
	.articles {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 10%;
		background-image: url(/images/Block1_Back.png);
		.navbar {
			display: flex;
			justify-content: center;
			margin-bottom: 5%;
			.navbar-btns {
				display: flex;
				flex-direction: row;
				gap: 10%;
				button,
				a {
					color: #fff;
					font-family: 'Amatic SC', serif;
					font-weight: 700;
					font-style: normal;
					font-size: 35px;
					background: none;
					white-space: nowrap;
                    transition: 500ms;
					&:hover {
						color: #d1d1d1;
					}
				}
			}
		}
	}
</style>
