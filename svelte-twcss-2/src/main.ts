import "./app.css";
import App from "./App.svelte";
import "@material/web/all";

const app = new App({
  target: document.getElementById("app") as Element,
});

export default app;
