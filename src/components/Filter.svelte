<script>
    export let filter="all";
</script>
<div class="filter_wrap">
    <div class="filter_btn" class:chose={filter === "all"} on:click={()=>filter="all"}>
        <span>All</span>
    </div>
    <div class="filter_btn" class:chose={filter === "active"} on:click={()=>filter="active"}>
        <span>Active</span>
    </div>
    <div class="filter_btn" class:chose={filter === "completed"} on:click={()=>filter="completed"}>
        <span>Completed</span>
    </div>
</div>

<style>
    .filter_wrap{
        width: 90%;
        display: flex;
        gap:1rem;
        margin: 0.75rem 0 ;
    }
    .filter_wrap .filter_btn{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
        height:2rem;
        border:1px solid black;
        cursor: pointer;
        
    }
    .filter_wrap .filter_btn span{
        width: fit-content;
        position: relative;
    }
    .filter_wrap .filter_btn span:after{
        content:'';
        position: absolute;
        width: 100%;
        height:0.1rem;
        background-color: black;
        bottom:0;
        left: 0;
        opacity: 0;
        transition: opacity 500ms ease;
    }
    .filter_wrap .filter_btn:hover span:after{
        opacity: 1;
    }
    .chose{
        background-color: black;
        color:white
    }
</style>