<script>
    import TestMenuCard from "../lib/TestMenuCard.svelte";
</script>

<div class="text-center">
    <h1 class="text-center m-4">What do you want to test?</h1>
    <div class="flex flex-col justify-center">
        <TestMenuCard pageLink={"/hiragana-test"} testName={"Hiragana"} />
        <TestMenuCard pageLink={"/katakana-test"} testName={"Katakana"} />
        <TestMenuCard pageLink={"/vocabulary-test"} testName={"Vocabulary"} />
    </div>
</div>