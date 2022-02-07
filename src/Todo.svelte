<script>
    import {todos} from './store.js'
    import InputForm from "./components/InputForm.svelte";
    import Filter from "./components/Filter.svelte";
    import CounterHeader from "./components/Counter.svelte";
    import Items from "./components/items.svelte";

    function deleteItem(e) {
        const { id } = e.detail;
        console.log(id)
        $todos = $todos.filter((item) => item.id !== id);
    }

    let filter = "all";
    const filterTodos = (filter, todo) => {
        if (filter === "active") return todo.filter((t) => !t.completed);
        if (filter === "completed") return todo.filter((t) => t.completed);
        return todo;
    };
</script>

<div class="todoapp">
    <h2>What needs to be done ?</h2>
    <InputForm />
    <Filter bind:filter />
    {#if $todos.length !== 0}
        <CounterHeader />
    {/if}
    {#each filterTodos(filter, $todos) as { message, completed, id } (id)}
        <Items { message} {completed} {id} on:deleteItem={deleteItem} />
    {:else}
        waiting for todoList...
    {/each}
</div>

<style>
    .todoapp {
        text-align: center;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 800px) {
        .todoapp {
            width: 90%;
        }
    }
</style>
