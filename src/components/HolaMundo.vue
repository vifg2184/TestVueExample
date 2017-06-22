<template>
    <div class="hola-mundo">
        <button v-on:click="toggleText()">ToggleText</button>
        <button v-on:click="reverseTextMethod()">ReverseText</button>
        <p v-if="showText">{{text | reverse}}</p>
        <p>{{reverseText}}</p>
        <hr />
        <ul>
            <li v-for="user in users" v-on:click="$emit('clickUser',user)">{{user}}</li>
        </ul>
        <input v-model="text">
    </div>
</template>

<script>
    export default{
       // props:['users'], //<-- nos permite ofrecer datos al componente con <hola-mundo v-bind:user="datos" />
        data(){
            return {
                text:'',
                showText:false,
                users:[]
            }
        },
        methods:{
            toggleText(){
                this.showText = !this.showText;
            },
            reverseTextMethod : function(){
                this.text = this.text.split('').reverse().join('');
            }
        },
        computed:{
            reverseText:function(){
                return this.text.split('').reverse().join('');
            }
        },
        mounted(){
            this.text="Hola Mundo"
        }

    }
</script>