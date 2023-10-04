<script>
    export let word, pronounce, eng, th, imgSrc;
</script>

<div class="card w-[140px] h-[210px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] mx-6 my-3 drop-shadow-md">
    <div class="card-inner">
        <div class="card-front bg-white flex flex-col items-center justify-center">
            <img src={imgSrc} alt={word} class="w-full h-full">
            <div class="bg-red-500 text-white flex items-center justify-center text-[16px] md:text-[20px] lg:text-[24px] w-[140px] h-[70px] md:w-[160px] md:h-[80px] lg:w-[180px] lg:h-[90px]">
                {word}
            </div>
        </div>
        <div class="card-back bg-red-500 text-white flex items-center justify-center flex-col text-[16px] md:text-[20px] lg:text-[24px]">
            <p>{pronounce}</p>
            <p>{eng}</p>
            <p>{th}</p>
        </div>
    </div>
</div>

<style>
    .card {
        background-color: transparent;
        perspective: 1000px;
    }

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    .card:hover .card-inner {
        transform: rotateY(180deg);
    }

    .card-front, .card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-back {
        transform: rotateY(180deg);
    }
</style>

