<template>
    <div class="col-md-6 col-md-offset-3 well">
        <div class="col-md-4 col-md-offset-4">
            <input class="form-control text-center" type="text" v-model="total"/></div>
        <hr />

        <button class="btn btn-block btn-info" v-on:click="increment()">
            Increment
        </button>
        <h4 class="text-center">{{ count }}</h4>
        <button class="btn btn-block btn-info" v-on:click="decrement()">
            Decrement
        </button>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default{
        data(){
            return {
                total:1
            }
        },
        methods:{
            increment(){
                this.$store.commit('increment',parseInt(this.total));
            },
            decrement(){
                this.$store.commit('decrement',parseInt(this.total));
            }
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        }
    }
</script>