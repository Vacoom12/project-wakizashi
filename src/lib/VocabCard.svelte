<script>
    export let word, pronounce, eng, th, imgSrc, id;
</script>

<div class="card w-[140px] h-[210px] md:w-[160px] md:h-[240px] lg:w-[180px] lg:h-[270px] mx-6 my-3 drop-shadow-md">
    <div class="card-inner">
        <div class="card-front bg-white flex flex-col items-center justify-center">
            <div class="w-full h-full">
                <img src="http://127.0.0.1:8090/api/files/vjgkho5pht331vb/{id}/{imgSrc}" alt="{word}" class="w-full h-full object-cover">
                <!-- <img src="/backend/pb_data/storage/vjgkho5pht331vb/{id}/{imgSrc}" alt="{word}" class="w-full h-full object-cover"> -->
            </div>
            <div class="bg-red-500 text-white p-[5px] flex items-center justify-center text-[16px] md:text-[20px] lg:text-[24px] w-[140px] h-[70px] md:w-[160px] md:h-[80px] lg:w-[180px] lg:h-[90px]">
                {word}
            </div>
        </div>
        <div class="card-back bg-red-500 text-white p-[5px] flex items-center justify-center flex-col text-[16px] md:text-[20px] lg:text-[24px]">
            <p class="text-[8px] md:text-[12px] lg:text-[16px]">{pronounce}</p>
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

