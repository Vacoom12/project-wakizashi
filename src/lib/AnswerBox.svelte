<script>
    import { isClick } from "./store";
    import { testScore } from "./store";

    export let answer;
    export let isCorrect = false;

    let buttonClass = "bg-white hover:bg-gray-200 hover:border-gray-200 border-4 border-white p-[5px] w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl text-[10px] md:text-[12px] lg:text-[15px]";

    function checkAnswer() {
        isClick.set(true)     
        console.log(isCorrect)

        if (isCorrect) {
            testScore.update((n) => n += 1);
            buttonClass = "bg-green-500 border-4 border-white text-white p-[5px] w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl text-[10px] md:text-[12px] lg:text-[15px]";
        } else {
            buttonClass = "bg-red-500 border-4 border-white text-white p-[5px] w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl text-[10px] md:text-[12px] lg:text-[15px]";
        }

        setTimeout(() => {
                isClick.set(false);
            }, 2000);
    }

    isClick.subscribe(value => {
        if (value === false) {
            buttonClass = "bg-white hover:bg-gray-200 hover:border-gray-200 border-4 border-white p-[5px] w-[80px] h-[40px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[75px] duration-500 rounded-xl text-[10px] md:text-[12px] lg:text-[15px]";
        }
    })
</script>

<button on:click={checkAnswer} class="{buttonClass}">
    {@html answer.join("<br>")}
</button>