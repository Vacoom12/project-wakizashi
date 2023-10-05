<!-- <script>
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
    });
</script>

<div class="text-center mt-[75px]">
    <h1 class="text-center mb-4">Vocabulary</h1>
    {#each words as word (word.id)}
        {#if !wordCategory.includes(word.category)}
            {wordCategory.push(word.category)}
            <h1>{word.category}</h1>
            <div class="grid grid-cols-5">
            {#each words as w (w.id)}
                {#if w.category === word.category}
                    <VocabCard
                        word={w.word}
                        pronounce={w.pronounce}
                        eng={w.ENGtranslate}
                        th={w.THtranslate}
                        imgSrc={w.img}
                    />
                {/if}
            {/each}
            </div>
        {/if}
    {/each}
</div> -->

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
            {#each words as w (w.id)}
                {#if w.category === category}
                    <VocabCard
                        word={w.word}
                        pronounce={w.pronounce}
                        eng={w.ENGtranslate}
                        th={w.THtranslate}
                        imgSrc={w.img}
                    />
                {/if}
            {/each}
        </div>
    {/each}
</div>