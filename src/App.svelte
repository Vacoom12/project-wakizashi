<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./routes/HomePage.svelte";
  import AlphabetPage from "./routes/AlphabetPage.svelte";
  import VocabPage from "./routes/VocabPage.svelte";
  import TestPage from "./routes/TestPage.svelte";
</script>
<div class="bg-orange-50 min-h-screen flex items-center justify-center">
  <nav class="bg-red-500 flex h-[75px] w-full fixed z-10 top-0 text-white items-center p-5">
    <div>
      <h1>Logo</h1>
    </div>
    <div class="ml-auto">
      <a href="/" class="mx-2">Home</a>
      <a href="/alphabet" class="mx-2">Alphabet</a>
      <a href="/vocabulary" class="mx-2">Vocabulary</a>
      <a href="/test" class="mx-2">Test</a>
    </div>
  </nav>
  
<Router>
  <Route path="/" component={HomePage} />
  <Route path="/alphabet" component={AlphabetPage} />
  <Route path="/vocabulary" component={VocabPage} />
  <Route path="/test" component={TestPage} />
</Router>

</div>