<template>
    <nav id="navMySvgs">
        <div class="nav-content">
            <div class="field search">
                <input type="text" placeholder="Searchterm...">
                <button>Search</button>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavMySvgs',
    data(){
        return{

        }
    }
}
</script>

<style>
#navMySvgs{
    margin: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#navMySvgs .field.search{
    display: flex;
    border: var(--pinkish) 2px solid;
    width: 450px;
    align-items: center;
    justify-content: space-between;
    color: var(--pinkish);
    border-radius: 100px;
}
#navMySvgs .field.field.search input{
    width: 100%;
    padding-left: 10px;
}
#navMySvgs .field.field.search button{
    margin: 2px;
    box-shadow: none;
    padding:5px 10px; 
}
</style>