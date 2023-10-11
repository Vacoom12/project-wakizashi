<script>
    export let answer;
    let isCorrect = false;
</script>

<button class="bg-white hover:bg-gray-100 p-[5px] w-[150px] h-[75px]">
    {@html answer.join("<br>")}
</button>