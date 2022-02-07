<script>
    import {todos} from '../store.js'
    $:id = $todos.length > 0 ? Math.max(...$todos.map(todo=>todo.id)) +1: 0;
    function submitData(e) {
        const text = document.querySelector("textarea");
        const data = {id:id,message:text.value,completed:false}
        $todos=[...$todos,data];
        text.value=""
    }
</script>

<div class="inputForm">
    <form on:submit|preventDefault={submitData}>
        <textarea
            name="todoData"
            id=""
            cols="30"
            rows="3"
            placeholder="todoList"
        />
        <input type="submit" value="Add" />
    </form>
</div>

<style>
    .inputForm{
        width: 100%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    textarea {
        font-size: 1.25rem;
        padding: 0.5rem;
    }
    input[type="submit"] {
        height: 2rem;
        font-size: 1.5rem;
        background-color: var(--black-bg);
        color: var(--light-font);
        border: none;
        cursor: pointer;
    }
</style>
