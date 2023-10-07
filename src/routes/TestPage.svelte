<script>
    import { onMount } from "svelte";
    import pb from '../lib/pocketbase';
    import QuestionBox from "../lib/QuestionBox.svelte";

</script>

<div class="bg-red-500 w-[600px] h-[450px] flex flex-col items-center justify-center rounded-[25px]">
    <QuestionBox />
    <div class="grid grid-cols-2 gap-x-[120px] gap-y-8">
        <button class="bg-white hover:bg-gray-100 rounded-xl p-[5px] w-[150px] h-[75px]">option</button>
        <button class="bg-white hover:bg-gray-100 rounded-xl p-[5px] w-[150px] h-[75px]">option</button>
        <button class="bg-white hover:bg-gray-100 rounded-xl p-[5px] w-[150px] h-[75px]">option</button>
        <button class="bg-white hover:bg-gray-100 rounded-xl p-[5px] w-[150px] h-[75px]">option</button>
    </div>
</div>