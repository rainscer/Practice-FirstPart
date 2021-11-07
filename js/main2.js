var quo = [
    {
    "quote": "This is just a Quote1 ",
    "source": "Christopher"
    },
    {
    "quote": "This is just a Quote2 This is just a Quote2 This is just a Quote2 This is just a Quote2",
    "source": "Martin"
    },
    {
    "quote": "This is just a Quote3",
    "source": "Dennis"
    },
    {
    "quote": "This is just a Quote4",
    "source": ""
    }   
];

new Vue ({
    el: '#secondDay',
    data: {
        quotes: quo,
        isAuthor:'true',
        sortedQuotes:''
    },
    computed: {
        filteredQuotes: function(){
            return this.quotes.filter(element => {
                return Boolean(this.isAuthor) == Boolean(element.source);
            })
        }
    },
    methods:{
        sortBySource(){
            this.sortedQuotes = this.quotes.sort((a, b) => (a.source > b.source) ? 1 : -1);
        }
    }
})



