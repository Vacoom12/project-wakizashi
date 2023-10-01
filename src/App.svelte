<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import pb from './lib/pocketbase.js'

  let letters = []

  async function handleClick() {
    const resultList = await pb.collection('letters').getList(1, 50)
    letters = resultList.items
  }
</script>

<main>
  <button on:click={handleClick}>
    click me
  </button>
  {#if letters.length > 0}
  <ul>
    {#each letters as letter (letter.id)}
      <li>{letter.hiragana}</li>
      <li>{letter.hiragana}</li>
    {/each}
  </ul>
  {:else}
    <p>Loading...</p>
  {/if}
</main>
