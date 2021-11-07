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
    },
    methods: {
        deleteStud: function(row) {
            for (let i = 0; i < this.stud.length; i++)
                if (Number(i) === Number(row))
                    this.stud.splice(i,1);
        }
    }
})