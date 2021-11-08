let students = [
    {
        id: '',
        name: "Кабанов Данил Алексеевич",
        group: "РПЗ 18 1/9",
        year: "2003",
        pr1: true,
    },
    {
        id: '',
        name: "Григорян Артур Тигранович",
        group: "РПЗ 18 1/9",
        year: "2002",
        pr1: false,
    },
    {
        id: '',
        name: "Ключка Никита Сергеевич",
        group: "РПЗ 18 1/9",
        year: "2002",
        pr1: true,
    },
    {
        id: '',
        name: "Паюнин Андрей Витальевич",
        group: "РПЗ 18 1/9",
        year: "2003",
        pr1: false,
    },
    {
        id: '',
        name: "Нугманов Руслан Олегович",
        group: "РПЗ 18 1/9",
        year: "2001",
        pr1: false,
    },
    {
        id: '',
        name: "Коршук Руслан Сергеевич",
        group: "РПЗ 18 1/9",
        year: "2003",
        pr1: false,
    },
    {
        id: '',
        name: "Толстов Олег Витальевич",
        group: "РПЗ 18 1/9",
        year: "2002",
        pr1: false,
    },
    {
        id: '',
        name: "Савченко Роман Юрьевич",
        group: "РПЗ 18 1/9",
        year: "2003",
        pr1: false,
    },
]

var thirdDay = new Vue ({
    el: '#thirdDay',
    data: {
        stud: students.slice(),
        filter_name: '',
        add_name: '',
        add_group: '0',
        add_year: '',
        add_pr1: '',
        blockStyle: {
            width: "100%",
            height: "100px",
            backgroundColor: "red",
        }
    },
    methods: {
        deleteStud: function(row) {
            for (let i = 0; i < this.stud.length; i++)
                if (Number(i) === Number(row))
                    this.stud.splice(i,1);
        },
        newColor: function(){
            this.blockStyle.backgroundColor="green";
        },
        standartColor: function(){
            this.blockStyle.backgroundColor="red";
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

            let mas_add_stud = {
                id: '',
                name: this.add_name,
                group: this.add_group,
                year: this.add_year,
                pr1: this.add_pr1,
            }
            this.stud.push( mas_add_stud );
            console.log(this.stud);

            this.add_name = '';
            this.add_group = '';
            this.add_year = '';
            this.add_pr1 = '';
        }        
    }
})