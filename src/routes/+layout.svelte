<script>
	import { goto } from '$app/navigation';
	import { inject } from '@vercel/analytics';
</script>

<header>
	<button class="media-logo" type="button" on:click={() => goto('/')}
		><img src="/images/NewLogo.png" alt="" /></button
	>
	<button type="button" on:click={() => goto('/gallery')}>Галлерея</button>
	<button type="button" on:click={() => goto('/vbros')}>Филиал Вброса</button>
	<button class="main-logo" type="button" on:click={() => goto('/')}
		><img src="/images/NewLogo.png" alt="" /></button
	>
	<button type="button" on:click={() => goto('/#where-am-i')}>Куда я попал?</button>
	<button type="button" on:click={() => goto('/#terms-of-use')}>Правила использования</button>
</header>

<main>
	<slot />
</main>

<style lang="scss">
	@use '/src/routes/nullstyle.scss';
	@use '/src/routes/fonts.scss';
	header {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 3%;
		padding-top: 2%;
		padding-bottom: 1%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		background: #0000002b;
		.media-logo {
			display: none;
		}
		button {
			white-space: nowrap;
			color: white;
			font-family: 'Amatic SC', serif;
			font-weight: 400;
			font-style: normal;
			font-size: 20px;
			background: none;
			border: none;
			transition: 500ms;
			&:hover {
				color: #d1d1d1;
			}
			img {
				width: 50px;
				transition: 500ms;
				&:hover {
					filter: brightness(0.7);
				}
			}
		}
	}
	@media (max-width: 700px) {
		header {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			padding-right: 8%;
			padding-top: 3%;
			.media-logo {
				display: block;
				grid-column-start: 1;
				grid-row-start: 1;
				grid-row-end: 4;
			}
			button{
				font-size: 18px;
			}
			.main-logo {
				display: none;
			}
		}
	}
</style>
