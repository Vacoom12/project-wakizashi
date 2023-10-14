<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./routes/HomePage.svelte";
  import AlphabetPage from "./routes/AlphabetPage.svelte";
  import VocabPage from "./routes/VocabPage.svelte";
  import TestPage from "./routes/HiraTestPage.svelte";
  import TestMenuPage from "./routes/TestMenuPage.svelte";
  import HiraTestPage from "./routes/HiraTestPage.svelte";
  import KataTestPage from "./routes/KataTestPage.svelte";
  import VocabTestPage from "./routes/VocabTestPage.svelte";
</script>
<header>
  <nav class="bg-red-500 flex h-[50px] w-full fixed z-10 top-0 text-white items-center p-4">
    <div class="w-[45px]">
      <a href="/">
        <img src="./src/assets/nihon-logo.png" alt="Logo">
      </a>
    </div>
    <div class="ml-auto">
      <a href="/" class="mx-2">Home</a>
      <a href="/alphabet" class="mx-2">Alphabet</a>
      <a href="/vocabulary" class="mx-2">Vocabulary</a>
      <a href="/test-menu" class="mx-2">Test</a>
    </div>
  </nav>
</header>

<div class="bg-orange-50 min-h-screen flex items-center justify-center">
<Router>
  <Route path="/" component={HomePage} />
  <Route path="/alphabet" component={AlphabetPage} />
  <Route path="/vocabulary" component={VocabPage} />
  <Route path="/test-menu" component={TestMenuPage} />
  <Route path="/hiragana-test" component={HiraTestPage} />
  <Route path="/katakana-test" component={KataTestPage} />
  <Route path="/vocabulary-test" component={VocabTestPage} />
</Router>
</div>

<footer class="bg-red-500 h-[50px] flex items-center justify-center">
  <h1 class="font-bold text-white">By Saksakun Jiarapong</h1>
</footer>