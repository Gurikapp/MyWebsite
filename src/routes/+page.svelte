<script>
	// import MoreButton from '$lib/components/MoreButton.svelte';
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Главная</title>
</svelte:head>

<section class="block1">
	<div class="block1-mainline">
		<div class="block1-line-left"></div>
		<p class="block1-mainline-top">Обитель</p>
		<div class="block1-line-right"></div>
		<p class="block1-mainline-bottom">Гурикаппа</p>
		<img
			class="block1-mainline-img-top blackAndWhiteFilter"
			src="/images/photos/IMG_(6).JPG"
			alt=""
		/>
		<img
			class="block1-mainline-img-bottom blackAndWhiteFilter"
			src="/images/photos/IMG_(13).JPG"
			alt=""
		/>
	</div>
</section>

<section class="block2" id="where-am-i">
	<div class="block2-header">
		<div class="block2-header-line-top"></div>
		<p class="block2-header-p">Куда я попал?</p>
		<div class="block2-header-line-bottom"></div>
	</div>
	<div class="block2-content">
		<h2 class="block2-content-h2">Куда надо</h2>
		<p class="block2-content-p">
			Сие есть личная обитель Гурикаппа Пенфаэра, созданная служить одной цели - демонстрации его
			безграничного могущества, не распростроняющегося на искусство фотографии (и дизайна).
		</p>
	</div>
	<img class="block2-img-top blackAndWhiteFilter" src="/images/photos/IMG_(33).JPG" alt="" />
	<img class="block2-img-bottom blackAndWhiteFilter" src="/images/photos/IMG_(37).JPG" alt="" />
</section>

<section class="block3" id="terms-of-use">
	<div class="block3-header">
		<div class="block3-header-line-top"></div>
		<p class="block3-header-p">Права использования</p>
		<div class="block3-header-line-bottom"></div>
	</div>
	<div class="block3-content">
		<h2 class="block3-content-h2">ХОЧЕШЬ ИСПОЛЬЗОВАТЬ МОИ ФОТОГРАФИИ?!</h2>
		<p class="block3-content-p">
			Без моего разрешения нельзя. А связаться можно в <a href="https://t.me/glebnotbread"
				>телеграме</a
			>.
		</p>
	</div>
	<img class="block3-img-first block3-img blackAndWhiteFilter" src="/images/photos/IMG_(29).JPG" alt="" />
	<img class="block3-img-second block3-img blackAndWhiteFilter" src="/images/photos/IMG_(42).JPG" alt="" />
	<img class="block3-img-third block3-img blackAndWhiteFilter" src="/images/photos/IMG_(47).JPG" alt="" />
</section>

<section class="block4">
	<div class="block4-header">
		<div class="block4-header-line-top"></div>
		<p class="block4-header-p">Галлерея</p>
		<div class="block4-header-line-bottom"></div>
	</div>
	<div class="block4-gallery">
		<div class="block4-gallery-leftcolumn">
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(25).JPG"
				alt=""
			/>
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(27).JPG"
				alt=""
			/>
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(30).JPG"
				alt=""
			/>
		</div>
		<div class="block4-gallery-rightcolumn">
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(34).JPG"
				alt=""
			/>
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(31).JPG"
				alt=""
			/>
			<img
				class="block4-gallery-img blackAndWhiteFilter"
				src="/images/photos/IMG_(44).JPG"
				alt=""
			/>
		</div>
	</div>
	<button class="block4-gallerybtn" type="button" on:click={() => goto('/gallery')}
		>Больше фото <span></span>&#10093</button
	>
</section>

<style lang="scss">
	@use '/src/routes/blackAndWhiteFilter.scss';
	.block1 {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-image: url(/images/Block1_Back.png);
		padding-top: 15%;
		padding-bottom: 4%;
		height: 100vh;
		@media (max-width: 800px) {
			height: auto;
		}
		@media (max-width: 700px) {
			padding-top: 27%;
		}
		.block1-mainline {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 100%;
			padding: 5% 0%;
			position: relative;
			gap: 13px;
			z-index: 1;
			.block1-line-left {
				border-bottom: 1px solid #ffffff66;
				width: 50%;
				margin-right: 50%;
				z-index: 2;
			}
			.block1-mainline-top {
				margin-right: 10%;
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 700;
				font-style: normal;
				font-size: 100px;
				z-index: 2;
				@media (max-width: 750px) {
					font-size: 60px;
				}
			}
			.block1-mainline-bottom {
				margin-left: 20%;
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 700;
				font-style: normal;
				font-size: 100px;
				z-index: 2;
				@media (max-width: 750px) {
					font-size: 60px;
				}
			}
			.block1-line-right {
				border-top: #ffffff66 1px solid;
				width: 55%;
				margin-left: 45%;
				z-index: 2;
			}
			.block1-mainline-img-top {
				height: 85%;
				position: absolute;
				top: 0;
				left: 10%;
				@media (max-width: 890px) {
					width: 40%;
					height: auto;
				}
			}
			.block1-mainline-img-bottom {
				height: 85%;
				position: absolute;
				top: 15%;
				right: 4%;
				@media (max-width: 890px) {
					width: 35%;
					height: auto;
				}
			}
		}
	}

	.block2 {
		display: flex;
		flex-direction: column;
		background-image: url(/images/Block2_Back.png);
		padding-bottom: 5%;
		position: relative;
		.block2-header {
			display: flex;
			flex-direction: column;
			padding: 5% 0%;
			.block2-header-line-top {
				border-top: #ffffff66 1px solid;
				width: 30%;
				margin-left: 70%;
				z-index: 2;
			}
			.block2-header-p {
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 60px;
				z-index: 2;
				text-align: end;
				margin-right: 20%;
				padding: 1% 0%;
				@media (max-width: 400px) {
					font-size: 40px;
				}
			}
			.block2-header-line-bottom {
				border-top: #ffffff66 1px solid;
				width: 65%;
				margin-left: 20%;
				z-index: 2;
			}
		}
		.block2-content {
			display: flex;
			flex-direction: column;
			width: 50%;
			margin-left: 50%;
			gap: 25px;
			.block2-content-h2 {
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 40px;
				z-index: 2;
				@media (max-width: 400px) {
					font-size: 30px;
				}
			}
			.block2-content-p {
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 25px;
				z-index: 2;
				margin-right: 10%;
				@media (max-width: 400px) {
					font-size: 20px;
				}
			}
		}
		.block2-img-top {
			height: 80%;
			position: absolute;
			top: 5%;
			left: 10%;
			z-index: 4;
			@media (max-width: 700px) {
				width: auto;
				height: 50%;
			}
			@media (max-width: 570px) {
				top: 45%;
				width: auto;
				height: 40%;
			}
		}
		.block2-img-bottom {
			height: 80%;
			position: absolute;
			top: 10%;
			left: 20%;
			z-index: 3;
			@media (max-width: 700px) {
				width: auto;
				height: 50%;
			}
			@media (max-width: 570px) {
				top: 50%;
				width: auto;
				height: 40%;
			}
		}
	}

	.block3 {
		display: flex;
		flex-direction: column;
		background-image: url(/images/Block1_Back.png);
		position: relative;
		overflow: hidden;
		.block3-header {
			display: flex;
			flex-direction: column;
			padding: 5% 0%;
			.block3-header-line-top {
				border-top: #ffffff66 1px solid;
				width: 30%;
				margin-right: 70%;
				z-index: 2;
			}
			.block3-header-p {
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 60px;
				z-index: 2;
				padding: 1% 0%;
				margin-left: 14%;
				@media (max-width: 400px) {
					font-size: 40px;
				}
			}
			.block3-header-line-bottom {
				border-top: #ffffff66 1px solid;
				width: 60%;
				margin-left: 10%;
				z-index: 2;
			}
		}
		.block3-content {
			display: flex;
			flex-direction: column;
			gap: 25px;
			margin-left: 14%;
			padding-bottom: 10%;
			.block3-content-h2 {
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 40px;
				z-index: 2;
				@media (max-width: 400px) {
					font-size: 25px;
				}
			}
			.block3-content-p {
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 25px;
				z-index: 2;
				a {
					color: #c7c7c7;
				}
				@media (max-width: 400px) {
					font-size: 20px;
				}
			}
		}
		.block3-img{
			height: 80%;
			position: absolute;
			top: 15%;
			z-index: 3;
			@media (max-width: 1120px) {
				width: auto;
				height: 60%;
			}
			@media (max-width: 920px) {
				width: auto;
				height: 40%;
			}
			@media (max-width: 770px) {
				display: none;
			}
		}
		.block3-img-first {
			right: 27%;
			@media (max-width: 1120px) {
				right: 21%;
			}
			@media (max-width: 920px) {
				right: 13%;
			}
		}
		.block3-img-second {
			right: 11%;
			@media (max-width: 1120px) {
				right: 8%;
			}
			@media (max-width: 920px) {
				right: 4%;
			}
		}
		.block3-img-third {
			right: -5%;
		}
	}

	.block4 {
		display: flex;
		flex-direction: column;
		background-image: url(/images/Block2_Back.png);
		padding-bottom: 5%;
		position: relative;
		.block4-header {
			display: flex;
			flex-direction: column;
			padding: 5% 0%;
			.block4-header-line-top {
				border-top: #ffffff66 1px solid;
				width: 30%;
				margin-left: 70%;
				z-index: 2;
			}
			.block4-header-p {
				white-space: nowrap;
				color: white;
				font-family: 'Amatic SC', serif;
				font-weight: 400;
				font-style: normal;
				font-size: 60px;
				z-index: 2;
				text-align: end;
				margin-right: 20%;
				padding: 1% 0%;
			}
			.block4-header-line-bottom {
				border-top: #ffffff66 1px solid;
				width: 65%;
				margin-left: 20%;
				z-index: 2;
			}
		}
		.block4-gallery {
			display: flex;
			flex-direction: row;
			justify-content: center;
			gap: 10px;
			@media (max-width: 400px) {
					padding-bottom: 10%;
				}
			.block4-gallery-leftcolumn {
				display: flex;
				flex-direction: column;
				width: 35%;
				gap: 10px;
			}
			.block4-gallery-rightcolumn {
				display: flex;
				flex-direction: column;
				width: 35%;
				gap: 10px;
			}
		}
		.block4-gallerybtn {
			display: inline-block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 4;
			background: none;
			color: white;
			text-align: center;
			font-family: 'Amatic SC', serif;
			font-weight: 400;
			font-style: normal;
			font-size: 100px;
			transition: 500ms;
			@media (max-width: 830px) {
				font-size: 80px;
			}
			@media (max-width: 650px) {
				font-size: 60px;
			}
			@media (max-width: 490px) {
				font-size: 40px;
			}
			span {
				transition: 500ms;
			}
			&:hover {
				color: #d1d1d1;
				span {
					margin: 10px;
				}
			}
		}
	}
</style>
