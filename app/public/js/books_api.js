
const Books = {
    data() {
      return {
        "books":[]
        }
    },
   
    methods: {
        fetchBookData() {
            console.log("A");
            fetch('api/books')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                console.log("C");
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
            console.log("B");
        }
    },

        
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(Books).mount('#booksApp');
console.log("Z");