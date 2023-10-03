<script>
    import ApbCard from "../lib/ApbCard.svelte";
    import pb from "../lib/pocketbase.js";

    let letters = [];

    async function getHiragana() {
        const hiraganaList = await pb.collection("letters").getList(1, 50);
        letters = hiraganaList.items;
        console.log(letters);
    }

    getHiragana();
</script>

<div class="text-center mt-[100px]">
    <h1 class="text-center m-4">Hiragana</h1>
    <div class="grid grid-cols-5">
        {#each letters as letter (letter.id)}
            <ApbCard letter={letter.hiragana} />
        {/each}
    </div>
    <h1 class="text-center m-4">Katakana</h1>
</div>
