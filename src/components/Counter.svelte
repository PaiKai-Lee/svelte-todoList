<script>
    import { todos } from "../store.js";
    $: total = $todos.length;
    $: completed = $todos.filter((item) => item.completed).length;
</script>

<h1>{completed} of {total} items completed</h1>

<style>
    h1 {
        align-self: flex-start;
        margin-left: 3.5rem;
    }
</style>
