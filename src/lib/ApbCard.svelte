<script>
    export let letter, eng, th;
</script>

<div class="card w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[160px] lg:h-[160px] mx-6 my-3 drop-shadow-md">
    <div class="card-inner">
        <div class="card-front bg-white flex items-center justify-center text-[16px] md:text-[32px] lg:text-[64px]">
            {letter}
        </div>
        <div class="card-back bg-white flex items-center justify-center flex-col text-[8px] md:text-[20px] lg:text-[28px]">
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
        transition: transform 0.8s;
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
