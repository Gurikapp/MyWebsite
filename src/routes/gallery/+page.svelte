<script>
	import { imageNames } from '$lib/data/GalleryImages.js';
	let currentImageIndex = 0;
	let fullscreenActive = false;
	let grayscaleActive = true;
	let fullscreenImg = '';

	function openFullscreen(index) {
		currentImageIndex = index;
		fullscreenImg = `/images/photos/${imageNames[currentImageIndex]}`;
		fullscreenActive = true;
	}

	function closeFullscreen() {
		fullscreenActive = false;
	}

	function showNextImage() {
		currentImageIndex = (currentImageIndex + 1) % imageNames.length;
		fullscreenImg = `/images/photos/${imageNames[currentImageIndex]}`;
	}

	function showPrevImage() {
		currentImageIndex = (currentImageIndex - 1 + imageNames.length) % imageNames.length;
		fullscreenImg = `/images/photos/${imageNames[currentImageIndex]}`;
	}

	function toggleGrayscale() {
		grayscaleActive = !grayscaleActive;
	}
</script>

<section class="gallery" id="gallery">
	{#each imageNames as imageName, index}
		<div class="image-container" on:click={() => openFullscreen(index)}>
			<img src={`/images/photos/${imageName}`} alt={imageName} class:grey-image={grayscaleActive} />
		</div>
	{/each}

	{#if fullscreenActive}
		<div id="fullscreen" class="fullscreen" on:click={closeFullscreen}>
			<span id="arrow-left" class="arrow arrow-left" on:click|stopPropagation={showPrevImage}>
				&#10094;
			</span>
			<img id="fullscreen-img" src={fullscreenImg} alt="Fullscreen Image" />
			<span id="arrow-right" class="arrow arrow-right" on:click|stopPropagation={showNextImage}>
				&#10095;
			</span>
		</div>
	{/if}
	<span class="switcher switcher-2 remove-filter">
		<input type="checkbox" id="switcher-2" on:change={toggleGrayscale} />
		<label for="switcher-2"></label>
	</span>
</section>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 30px;
		background: #000;
		padding-top: 14%;
		padding-bottom: 10%;
		background-image: url(/images/Block1_Back.png);
		position: relative;
		.remove-filter {
			position: absolute;
			top: 3%;
			left: 42%;
		}
	}

	.image-container {
		display: flex;
		justify-content: center;
		cursor: pointer;
	}

	.image-container img {
		height: 200px;
		transition: transform 0.3s ease;
	}

	.grey-image {
		filter: grayscale(1);
		transition: filter 1s;
	}

	.grey-image:hover {
		filter: grayscale(0);
	}

	.fullscreen {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.9);
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.fullscreen img {
		max-width: 90%;
		max-height: 90%;
	}

	.arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		font-size: 40px;
		color: #a1a1a1;
		cursor: pointer;
	}

	.arrow-left {
		left: 20px;
	}

	.arrow-right {
		right: 20px;
	}

	@media (max-width: 700px) {
		.gallery {
			grid-template-columns: 1fr;
			padding-top: 28%;
		}
	}

	$black: #1e1e1e;
	$white: #fff;

	span.switcher {
		position: relative;

		width: 200px;
		height: 50px;
		border-radius: 25px;
		margin: 20px 0;
		input {
			appearance: none;

			position: relative;

			width: 200px;
			height: 50px;
			border-radius: 25px;

			background-color: $black;
			outline: none;

			font-family: 'Amatic SC', serif;
			font-weight: 700;
			font-style: normal;
			font-size: 20px;
			&:before,
			&:after {
				z-index: 2;

				position: absolute;
				top: 50%;
				transform: translateY(-50%);

				color: $white;
			}
			&:before {
				content: 'Включить ЧБ';
				left: 20px;
			}
			&:after {
				content: 'Выключить ЧБ';
				right: 20px;
			}
		}
		label {
			z-index: 1;
			position: absolute;
			top: 10px;
			bottom: 10px;

			border-radius: 20px;
		}
		&.switcher-2 {
			overflow: hidden;
			input {
				transition: background-color 0s 0.5s;
				&:before {
					color: $black;
				}
				&:after {
					color: $white;
				}
				&:checked {
					background-color: $white;
					& + label {
						background: $white;

						animation: turn-on 0.5s ease-out;

						@keyframes turn-on {
							0% {
								left: 100%;
							}
							100% {
								left: 0%;
							}
						}
					}
				}
				&:not(:checked) {
					background: $black;
					& + label {
						background: $black;

						animation: turn-off 0.5s ease-out;

						@keyframes turn-off {
							0% {
								right: 100%;
							}
							100% {
								right: 0%;
							}
						}
					}
				}
			}
			label {
				top: 0px;

				width: 200px;
				height: 50px;
				border-radius: 25px;
			}
		}
	}
</style>
