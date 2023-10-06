<script>
    import { onMount } from "svelte";
    import pb from "../lib/pocketbase.js";
    import VocabCard from "../lib/VocabCard.svelte";

    let words = [];
    let wordCategory = [];

    onMount(async () => {
        const vocabList = await pb.collection("vocabulary").getFullList({
            sort: "-category",
        });
        words = vocabList;
        
        words.forEach(word => {
            if (!wordCategory.includes(word.category)) {
                wordCategory.push(word.category);
            }
        });
    });
</script>

<div class="text-center mt-[75px]">
    <h1 class="text-center mb-4">Vocabulary</h1>
    {#each wordCategory as category}
        <h1>{category}</h1>
        <div class="grid grid-cols-5">
            {#each words as word (word.id)}
                {#if word.category === category}
                    <VocabCard
                        word={word.word}
                        pronounce={word.pronounce}
                        eng={word.ENGtranslate}
                        th={word.THtranslate}
                        imgSrc={word.img}
                    />
                {/if}
            {/each}
        </div>
    {/each}
</div>