<script>
    import TestMenuCard from "../lib/TestMenuCard.svelte";
</script>

<div class="text-center">
    <h1 class="text-center m-4 font-bold m-4 text-[36px]">What do you want to test?</h1>
    <div class="flex flex-col items-center justify-center">
        <TestMenuCard pageLink={"/hiragana-test"} testName={"Hiragana"} />
        <TestMenuCard pageLink={"/katakana-test"} testName={"Katakana"} />
        <TestMenuCard pageLink={"/vocabulary-test"} testName={"Vocabulary"} />
    </div>
</div>