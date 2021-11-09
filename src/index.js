import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

var thirdDay = new Vue ({
    el: '#thirdDay',
    data: {
        students: [],
        bank_info: [],
        filter_name: '',
        add_name: '',
        add_group: '0',
        add_photo: '0',
        add_pr1: '',
        add_mark:'',
        add_photo:'',
        fs_curr_num:'',
        conv_sum:'',
              
    },
     methods: {
         deleteStud: function(row) {
             for (let i = 0; i < this.students.length; i++)
                 if (Number(i) === Number(row))
                     this.students.splice(i,1);
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

            let mas_add_stud = {
                 id: '',
                 name: this.add_name,
                 group: this.add_group,                 
                 isDonePr: this.add_pr1,
                 mark: this.add_mark,
                 photo: this.add_photo,
             }
             this.students.push( mas_add_stud );
             
                this.add_name = '';
                this.add_group = '0';                      
                this.add_pr1 = '';
                this.add_mark = ''; 
                this.add_photo = '0'; 
            },
            conventor: function(){ 
                       
                this.conv_sum = this.fs_curr_num * this.rateCross;
           }
    },

    mounted: function(){
        axios.get("http://46.101.212.195:3000/students").then((response)=>{
            console.log(response.data);
            this.students=response.data;
        }),

        axios.get("https://api.monobank.ua/bank/currency").then((response) => {
            console.log(response.data);
            this.bank_info = response.data;          
           
        })
    }
})