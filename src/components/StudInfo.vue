<template>
   <div class="main-stud">
        <div>
            <img :src="student.photo">
        </div>
        <div class="stud-about">
            <p>ПІБ: {{student.name}}</p>
            <p>Група: {{student.group}}</p>
            <p>Оцінка: {{student.mark}}</p>
            <p>{{getCount}}</p> 
        </div>        
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    props:{
        id:'',
    },
    data: function(){
        return{
            student:{},
        };
    },
    mounted: function(){
        Vue.axios.get("http://46.101.212.195:3000/students/"+this.id).then((response)=>{
            console.log(response.data)
            this.student=response.data;
        })
    },
    computed:{
            getCount(){
                return this.$store.getters['getCount']
            }
    }
}
</script>