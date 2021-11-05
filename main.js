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

var Funct = new Vue ({
    el: '#functionTask',
    data: {        
        RanNumber: parseInt((Math.random()*10)),
        tryNum: 0,
        NumFun3:'',
        PowFun3:'',
        inputRanNum:'',
        CheckAge5:'',
    },
    methods: {
        NumInPow: function(){
            if (this.NumFun3.trim() == '' || this.PowFun3.trim() == '' || !Number(this.NumFun3.trim()) || !Number(this.PowFun3.trim())){
                alert('Введите число')
            }
            else{
                alert( ` ${this.NumFun3.trim()} ^ ${this.PowFun3.trim()} = ${Math.pow(this.NumFun3, this.PowFun3)}`);
            }
        },        
        CheckAge: function(){
            if (this.CheckAge5.trim() > 16){
                alert('ласкаво просимо');
            }
            else if (this.CheckAge5.trim() <=16 && this.CheckAge5.trim() > 0){
                alert('ви ще молоді');
            }
        },
        RandomNumber: function(){
            console.log(`загаданное число - ${this.RanNumber}`)            
            if (this.tryNum <3){
                this.tryNum++;
                if(Number(this.inputRanNum.trim()) > this.RanNumber){
                    alert ('загаданое число меньше')
                }
                else if(Number(this.inputRanNum.trim()) < this.RanNumber){
                    alert ('загаданое число больше')
                }
                else if(Number(this.inputRanNum.trim()) == this.RanNumber){
                    alert (`Вы угадали! загаданное число - ${this.RanNumber}! Количество ${this.tryNum} попыток`)
                    this.tryNum = 4;
                }                
            }
            if (this.tryNum == 4){
                this.tryNum = 0;
                this.RanNumber = parseInt((Math.random()*10));
            }
            else if (this.tryNum >=3 ){
                alert("Вы не угадали число");
                this.tryNum = 0;
                this.RanNumber = parseInt((Math.random()*10));
            }
        }
    }
});

var LineTask = new Vue ({
    el: '#LineTask',
    data: {
        img: [
            {
                name: 'purple',
                link: 'img/1.jpg'
            },
            {
                name: 'blue',
                link: 'img/2.jpg'
            },
            {
                name: 'space',
                link: 'img/3.jpg'
            }            
        ],
        accountNew: {
            name: '',
            surname: '',
            password: '',
            email: ''
        },
        line1:'',
        line3:'',

    },
    methods: {
        lineLength: function(){
            alert(`Длина строки = ${this.line1.length}`)
        },
        URL: function(){           
            if ((this.line3.trim().slice(0,8) == "https://")||( this.line3.trim().slice(0,7) == "http://")) {
                alert(`URL - ${this.line3.trim().slice(8)}`);
            }
            else{
                alert("Неверный формат ввода URL!");
            }
        },
        CreateNewAccount: function(e){
            e.preventDefault();  

            this.accountNew.name = this.accountNew.name.trim();
            this.accountNew.surname = this.accountNew.surname.trim();
            this.accountNew.password = this.accountNew.password.trim();
            this.accountNew.email = this.accountNew.email.trim();

            if (this.accountNew.name == '' || this.accountNew.surname == '' || this.accountNew.password == '' || this.accountNew.email == ''){
                alert('Заполните все поля');
                return;
            }
            if (this.accountNew.password.length < 5){
                alert('Слишком короткий пароль');
                return;
            }            
            let emailcount = 0;
            for (let i = 0; i < this.accountNew.email.length; i++){
                if (i != this.accountNew.email.length && this.accountNew.email.slice(i,i+1) == '@'){
                    emailcount++;                    
                }
                if (i != this.accountNew.email.length && this.accountNew.email.slice(i,i+1) == ' '){
                    alert('Введите корректный email')
                    return;
                }     
            }
            if (emailcount < 1) {
                alert('Введите корректный email')
                return;
            }
            alert(`Новый аккаунт создан \n Имя: ${this.accountNew.name} \n Фамилия: ${this.accountNew.surname} \n Email: ${this.accountNew.email} `);
        }
    }
});

//localStorage.setItem();// write
//localStorage.getItem();//ready
//localStorage.removeItem(); // delete
//localStorage.clear(); // all

const students = [
    {surname: 'Varakyta', name: 'Artur', age:'18'},
    {surname: 'Grigoryan', name: 'Artur', age:'19'},
    {surname: 'Payunin', name: 'Andrey', age:'18'},
    {surname: 'Tolstov', name: 'Oleg', age:'19'},
    {surname: 'Kabanov', name: 'Danil', age:'18'},
];
const numder = 123;
const fruit = {
    name: 'Pineapple',
    color:'yellow',
    wight: 5
}

const localSecond = document.querySelector(".local-second");
const localFourth = document.querySelector(".local-fourth");

localStorage.setItem('students', JSON.stringify(students))

localStorage.setItem('fruit', JSON.stringify(fruit))

let studentArr = localStorage.getItem('students')
let fruitObj = localStorage.getItem('fruit')

localSecond.addEventListener('click', function(){
    studentArr = JSON.parse(studentArr)
    console.log(studentArr)
});

localFourth.addEventListener('click', function(){
    studentArr = JSON.parse(studentArr)    
    fruitObj = JSON.parse(fruitObj)
    console.log(studentArr)
    console.log(localStorage.getItem('numder'))
    console.log(fruitObj)
})

