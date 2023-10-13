<script>
    import MenuCard from "../lib/MenuCard.svelte";
</script>

<div class="text-center">
    <h1 class="text-center font-bold m-4 text-[36px]">Welcome</h1>
    <div class="flex flex-col sm:flex-row md:flex-row justify-center">
        <MenuCard pageLink={"/alphabet"} menuName={"Hiragana & Katakana"} />
        <MenuCard pageLink={"/vocabulary"} menuName={"Vocabulary"} />
        <MenuCard pageLink={"/test-menu"} menuName={"Quick Test"} />
    </div>
</div>
