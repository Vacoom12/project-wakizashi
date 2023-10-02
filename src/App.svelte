<script>
  import { Router, Route } from "svelte-routing";
  import HomePage from "./routes/HomePage.svelte";
  import AlphabetPage from "./routes/AlphabetPage.svelte";
  import VocabPage from "./routes/VocabPage.svelte";
  import TestPage from "./routes/TestPage.svelte";
</script>

<Router>
  <Route path="/" component={HomePage} />
  <Route path="/alphabet" component={AlphabetPage} />
  <Route path="/vocabulary" component={VocabPage} />
  <Route path="/test" component={TestPage} />
</Router>
