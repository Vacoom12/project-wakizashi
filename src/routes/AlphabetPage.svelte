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

<div class="text-center mt-[75px]">
    <h1 class="text-center mb-4">Hiragana</h1>
    <div class="grid grid-cols-5">
        {#each letters as letter (letter.id)}
            {#if 'やゆわを'.includes(letter.hiragana)}
                <ApbCard letter={letter.hiragana} th={letter.THtranslate} eng={letter.ENGtranslate} />
                <div></div>
            {:else}
                <ApbCard letter={letter.hiragana} th={letter.THtranslate} eng={letter.ENGtranslate} />
            {/if}
        {/each}
    </div>
    <h1 class="text-center m-4">Katakana</h1>
    <div class="grid grid-cols-5">
        {#each letters as letter (letter.id)}
            {#if 'ヤユワヲ'.includes(letter.katakana)}
                <ApbCard letter={letter.katakana} th={letter.THtranslate} eng={letter.ENGtranslate} />
                <div></div>
            {:else}
                <ApbCard letter={letter.katakana} th={letter.THtranslate} eng={letter.ENGtranslate} />
            {/if}
        {/each}
    </div>
</div>
