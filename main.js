var ifElse = new Vue ({
    el: '#ifElse',
    data: {

        users: [
            {
                login: 'toma',
                password: '123'
            },
            {
                login: 'petya',
                password: '777'
            },
            {
                login: 'olya',
                password: '456'
            },
        ],
        numberFlat:'',
        LoginIfElse2:'',
        PasswordIfElse2:'',
        AgeIfElse3:'',
        ExperienceIfElse4:''
    },
    methods: {
        //IFELSE FIRST TASK
        entranceFlat: function() {
            if (this.numberFlat.trim() == ''){
                alert('Введите номер квартиры');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) > 90 || Number(this.numberFlat.trim()) < 1)
            {
                alert('Такой квартиры нет');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 20){
                alert('Ваш подъезд №1');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 48){
                alert('Ваш подъезд №2');
                this.numberFlat = '';
            }
            else if (Number(this.numberFlat.trim()) <= 90){
                alert('Ваш подъезд №3');
                this.numberFlat = '';
            }
        },
        //IFELSE SECOND TASK
        authorize: function() {
            let i = 0;
            while (this.users[i]){
                if (this.LoginIfElse2.trim() == this.users[i].login && this.PasswordIfElse2.trim() == this.users[i].password)
                {
                    alert(`Ласкаво просимо`);
                    break;
                }
                i++;
            };
            if (!this.users[i])
            {
                alert('Помилка входу');
            }           
        },
        //IFELSE THIRD TASK
        CheckAge: function() 
        {
            if (2021 - this.AgeIfElse3 >= 16){
                alert(`Ласкаво просимо`);
            }
            else {
                alert(`Вхід заборонено`);
            }
        },
        //IFELSE FOURTH TASK
        CheckExperience: function()
        {
            if (this.ExperienceIfElse4.trim() == ''){
                alert('Укажите стаж работы')
            } 
            else if (this.ExperienceIfElse4.trim() < 0){
                alert('Укажите верный формат');
            }   
            else if (this.ExperienceIfElse4.trim() < 3 ){
                alert('Ваша надбавка 0%');
            }
            else if (this.ExperienceIfElse4.trim() < 10){
                alert('Ваша надбавка 10%');
            }
            else if (this.ExperienceIfElse4.trim() < 20){
                alert('Ваша надбавка 20%');
            }
            else if (this.ExperienceIfElse4.trim() > 20){
                alert('Ваша надбавка 25%');
            }            
        }        
    }
});

//CYCLES
document.addEventListener('DOMContentLoaded', function(){
const cycleFirst = document.querySelector(".cycle-first");
const cycleSecond = document.querySelector(".cycle-second");
const cycleThird = document.querySelector(".cycle-third");
const cycleFourth = document.querySelector(".cycle-fourth");
const cycleFifth = document.querySelector(".cycle-fifth");

//FIRST
    function Task1(){
        let step = 0;
        for (step = 4; step <= 400; step++) {    
            console.log(step);
        }
    };
    cycleFirst.addEventListener('click', function(){
        Task1();
    });
//SECOND
    function Task2(){
        let second = 1;
        for (step = 0; step < 4; step++) {    
            second = second+3;
            console.log(second);
        };
    };
    cycleSecond.addEventListener('click', function(){
        Task2();
    });
//THIRD
    function Task3(){
        for (step = 654; step >= 0; step--) { 
            console.log(step);
        };
    };
    cycleThird.addEventListener('click', function(){
        Task3();
    });
//FOURTH
    function Task4(){
        for (step = 1983; step <=2017; step++) {    
            console.log(step+' year');
        };
    };
    cycleFourth.addEventListener('click', function(){
        Task4();
    });
//FIFTH
    function Task5(){
        for (step = -4; step <=100; step+=2) {  
            console.log(step);
        };
    };
    cycleFifth.addEventListener('click', function(){
        Task5();
    });
});
//SIXTH
var cycles = new Vue ({
    el: '#cycles',
    data: {
        multiplicationOnFive: '',
    },
    methods: {
        MultiFive: function(){
            this.multiplicationOnFive = '';
            for (let i = 1; i < 10; i++){
                this.multiplicationOnFive += `5 * ${i} = ${i*5} \n`
            }
        }
    }
});

//FUNCTION

//FIRST
let imageshadow = document.querySelectorAll('img');

Array.prototype.forEach.call(imageshadow, function(el) {
    el.style.height = '300px';
    el.style.boxShadow = '5px 5px 10px black';
});

//SECOND
let paragraf = document.querySelectorAll('p');
let paragrafNumber = 0;

Array.prototype.forEach.call(paragraf, function(el) {
    paragrafNumber += 1;
    el.innerHTML = `${paragrafNumber}. ${el.innerHTML}`;
});

