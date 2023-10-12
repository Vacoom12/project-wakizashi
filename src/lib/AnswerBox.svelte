<script>
    import { isClick } from "../lib/store";

    export let answer;
    export let isCorrect = false;
    let buttonClass = "bg-white hover:bg-gray-200 p-[5px] w-[150px] h-[75px] duration-500";

    function checkAnswer() {
        isClick.set(true)
        console.log(isClick)
        if (isCorrect) {
            buttonClass = "bg-green-500 border-4 border-white p-[5px] w-[150px] h-[75px] duration-500";
        } else {
            buttonClass = "bg-red-500 border-4 border-white p-[5px] w-[150px] h-[75px] duration-500"
        }
    }
</script>

<button on:click={checkAnswer} class="{buttonClass}">
    {@html answer.join("<br>")}
</button>