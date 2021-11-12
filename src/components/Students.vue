<template>
    <div>
        <h3>Список студентов</h3>
        <div>
            <p>Поиск</p>
            <input type="text" v-model="filter_name" placeholder="Введите фамилию">
        </div>
        <br>
        <table>
            <tr>
                <th>ФИО</th>
                <th>Група</th>
                <th>Фото</th>
                <th>ПР</th>
                <th>Оценка</th>
                <th>Удалить</th>
            </tr>
            <tr v-for="student in students" v-bind:key="student._id" v-bind:style="student.name.toUpperCase().indexOf(filter_name.toUpperCase())>-1 && filter_name.length >0 ? 'background-color: lime'  : 'thirdNone'">
 
                <td v-if="nowChange != student._id">              
                <router-link v-bind:to="'/stud-info/'+student._id">
                    {{student.name}}
                </router-link></td>
                <td v-if="nowChange == student._id"><input v-model="changeName"></td>
                <td v-if="nowChange != student._id">{{student.group}}</td>                
                 <td v-if="nowChange == student._id">
                 <select v-model="changeGroup">
                     <option value="RPZ 18 1/9">RPZ 18 1/9</option>
                     <option value="RPZ 18 2/9">RPZ 18 2/9</option>
                 </select>
                </td>
                <td><img  :src="student.photo" class="stud_photo" alt=""></td>
                <td v-if="nowChange != student._id"><input type="checkbox"  v-model="student.isDonePr"></td>
                <td v-if="nowChange == student._id"><input type="checkbox" v-model="changePr"></td>
                <td v-if="nowChange != student._id">{{student.mark}}</td>
                <td v-if="nowChange == student._id"><input v-model="changeMark"></td>
                <td><a v-on:click="deleteStud(student._id)">DeLeTe</a></td>
                <button v-on:click="changeStud(student._id)"><img class="img-pencil" src="1.png"></button>
            </tr>
              
        </table>
        <br>
        <div>
            <input v-model.trim="add_name"  placeholder="Введите ФИО">
            <select v-model.trim="add_group" >
                <option value="0"  disabled selected>Выберите группу</option>
                <option value="1">РПЗ 18 1/9</option>
                <option value="2">РПЗ 18 2/9</option>
            </select>            
            ПР<input v-model.trim="add_pr1" type="checkbox">
            <input v-model.trim="add_mark" placeholder="Введите оценку"  >
            <button v-on:click="addStud">Add</button>  
            <button v-on:click="updateStud">Update</button>               
        </div>          
    </div>
</template>

<script>

import Vue from 'vue'

export default{
 data: function() {
     return{
        students: [],
        bank_info: [],
        filter_name: '',
        add_name: '',
        add_group: '0',
        add_photo: '0',
        add_pr1: false,
        add_mark:'',
        add_photo:'',
        fs_curr_num:'',
        conv_sum:'',
        nowChange:'',
        changeName:"",
        changeGroup:'',
        changePr:'',
        changeMark:'',

     } 
    },
    mounted: function(){
           Vue.axios.get("http://46.101.212.195:3000/students").then((response) => {
           console.log(response.data)
           this.students = response.data
           })
         
    },
     methods: {
         deleteStud: function(id) {   
            console.log(id)
            Vue.axios.delete(`http://46.101.212.195:3000/students/`+id).then(
                ()=>{this.students= this.students.filter(student => student._id !== id)}
            )
         },
         addStud: function() {
            if (this.add_group == 0) {
                 alert('Группа не выбрана!');
                 return
             }
             else if (this.add_group == 1) {
                 this.add_group = 'РПЗ 18 1/9'
             }
             else if (this.add_group == 2) {
                 this.add_group = 'РПЗ 18 2/9'
             }
             else {
                 alert('Неизвестная ошибка');
                 return
             }

             this.add_photo = 'https://robohash.org/'+this.add_name;

             Vue.axios.post("http://46.101.212.195:3000/students",{
                 name: this.add_name,
                 group: this.add_group,                 
                 isDonePr: this.add_pr1,
                 mark: this.add_mark,
                 photo: this.add_photo,
             })
             .then((response)=>{
                this.add_name = '';
                this.add_group = '0';                      
                this.add_pr1 = '';
                this.add_mark = ''; 
                this.add_photo = '0'; 
                 console.log(response.data)
             })
  
            },
            changeStud: function(num){
              this.nowChange  = num;
              
              for(let i=0; i<this.students.length; i++ ){
                  if(this.students[i]._id == num){
                      this.changeName = this.students[i].name
                      this.changeGroup = this.students[i].group
                    this.changePr = this.students[i].isDonePr
                    this.changeMark = this.students[i].mark
                  }
              }

            },
            updateStud: function(){
                Vue.axios.put(`http://46.101.212.195:3000/students/${this.nowChange}`,{
                        name: this.changeName,
                        group: this.changeGroup,
                        isDonePr: this.changePr,
                        mark: this.changeMark,
                    })
                    for(let i=0; i<this.students.length; i++){
                         if(this.students[i]._id == this.nowChange){
                             this.students[i].name=this.changeName
                             this.students[i].group=this.changeGroup
                             this.students[i].isDonePr=this.changePr
                             this.students[i].mark=this.changeMark
                         }
                    }
                    this.nowChange='';
            }
        },

    
}

</script>

<style scoped>

</style>