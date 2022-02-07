<script>
    import Todo from "./Todo.svelte";
</script>

<Todo/>

<style>
    :global(*) {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    :global(:root) {
        --delete-bg: red;
        --black-bg: black;
		--light-font:white;
    }
	:global(.be-center){
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(body){
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
