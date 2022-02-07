<script>
    import { todos } from "../store.js";
    import { createEventDispatcher } from "svelte";
    const dispacher = createEventDispatcher();
    export let id ;
    export let completed;
    export let message = "todo item";
    let inputBox;
    let edit = false;
    const index = $todos.findIndex(todo=>todo.id === id);
    function deleteItem() {
        dispacher("deleteItem", { id });
    }
    function editContent(e) {
        const inputText = inputBox.value;
        message = inputText;
        // const index = $todos.findIndex((todo) => todo.id === id);
        $todos[index]["message"] = message;
        edit = !edit;
    };
    // console.log(index)
    $:$todos[index]["completed"]=completed
</script>

<div class="item_wrap">
    {#if edit}
        <div class="modify_wrap">
            <input type="text" value={message} bind:this={inputBox} />
        </div>
        <div class="btn_wrap">
            <button class="edit_btn" on:click={() => (edit = !edit)}
                ><span>Cancel</span></button
            >
            <button class="edit_btn" on:click={editContent}
                ><span>Save</span></button
            >
        </div>
    {:else}
        <div class="check_wrap">
            <label>
                <input
                    type="checkbox"
                    class="item_check"
                    name="done"
                    bind:checked={completed}
                />
                <span />
            </label>
            <input
                type="text"
                class:done={completed}
                disabled
                bind:value={message}
            />
        </div>
        <div class="btn_wrap">
            <button class="edit_btn edit" on:click={() => (edit = !edit)}
                ><span>Edit</span></button
            >
            <button class="edit_btn delete" on:click={deleteItem}
                ><span>Delete</span></button
            >
        </div>
    {/if}
</div>

<style>
    .item_wrap {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    .check_wrap,
    .modify_wrap,
    .btn_wrap {
        display: flex;
        width: 100%;
        gap: 1rem;
    }
    .modify_wrap input[type="text"] {
        flex: auto;
        font-size: 1.25rem;
        padding: 0.5rem;
    }
    .modify_wrap input[type="text"]:focus {
        outline-style: groove;
        outline-offset: 2px;
    }
    .check_wrap .item_check {
        display: none;
    }
    .check_wrap > label {
        position: relative;
        background: transparent;
        border: 2px solid black;
        width: 3rem;
        height: 3rem;
    }
    .check_wrap .item_check:checked + span {
        position: absolute;
        width: 150%;
        height: 150%;
        top: 0;
        left: 0;
        background: url("/build/images/check.svg") no-repeat;
        background-size: cover;
    }
    .check_wrap input[type="text"] {
        flex: auto;
        border: none;
        outline: none;
        font-size: 1.25rem;
    }
    .btn_wrap .edit_btn {
        flex: 1;
        height: 2rem;
        font-size: 1.25rem;
        cursor: pointer;
    }
    .btn_wrap .delete {
        background: var(--delete-bg);
        color: var(--light-font);
    }
    .done {
        text-decoration: line-through;
    }
</style>
