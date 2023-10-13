<script>
    import { onMount } from 'svelte';
    import ApbCard from "../lib/ApbCard.svelte";
    import pb from "../lib/pocketbase.js";

    let letters = [];

    onMount(async () => {
        const apbList = await pb.collection("letters").getFullList({
            sort: '+created',
        });
        letters = apbList;
    })

</script>

<div class="text-center mt-[75px]">
    <h1 class="text-center mb-4 text-[24px] font-bold">- Hiragana -</h1>
    <div class="grid grid-cols-5">
        {#each letters as letter (letter.id)}
            {#if 'やゆわを'.includes(letter.hiragana)}
                <ApbCard 
                    letter={letter.hiragana} 
                    th={letter.THtranslate} 
                    eng={letter.ENGtranslate} 
                />
                <div></div>
            {:else}
                <ApbCard letter={letter.hiragana} th={letter.THtranslate} eng={letter.ENGtranslate} />
            {/if}
        {/each}
    </div>
    <h1 class="text-center m-4 text-[24px] font-bold">- Katakana -</h1>
    <div class="grid grid-cols-5">
        {#each letters as letter (letter.id)}
            {#if 'ヤユワヲ'.includes(letter.katakana)}
                <ApbCard 
                    letter={letter.katakana} 
                    th={letter.THtranslate} 
                    eng={letter.ENGtranslate} 
                />
                <div></div>
            {:else}
                <ApbCard 
                    letter={letter.katakana} 
                    th={letter.THtranslate} 
                    eng={letter.ENGtranslate} 
                />
            {/if}
        {/each}
    </div>
</div>
