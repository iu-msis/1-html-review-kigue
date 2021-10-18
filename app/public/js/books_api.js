
const Books = {
    data() {
      return {
        "books":[],
        "bookForm":{},
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
        },
         postNewBook(evt) {     
        console.log("Posting:", this.offerForm);
        // alert("Posting!");

        // fetch('api/offer/create.php', {
        //     method:'POST',
        //     body: JSON.stringify(this.offerForm),
        //     headers: {
        //       "Content-Type": "application/json; charset=utf-8"
        //     }
        //   })
        //   .then( response => response.json() )
        //   .then( json => {
        //     console.log("Returned from post:", json);
        //     // TODO: test a result was returned!
        //     this.offers = json;
            
        //     // reset the form
                this.resetOfferForm();
        //     this.offerForm = {};
        //   });
      },
    },
    handleEdit(book) {
        this.selectOffer = o;
        this.offerForm = this.selectOffer;
    },
    resetOfferForm() {
        this.selectOffer = null;
        this.offerForm = {}:
    }


        
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(Books).mount('#booksApp');