
const Books = {
    data() {
      return {
        "books":[],
        offerForm:{},
        selectedOffer: null,
        bookForm:{}
        }
    },

    computed:{},
   
    methods: {
        fetchBookData() {
            console.log("A");
            fetch('api/books/')
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
            console.log("Create:", this.bookForm);

            fetch('api/books/create_book.php', {
                method:'POST',
                body: JSON.stringify(this.bookForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                this.bookForm ={};
              });
      },

        postEditOffer(evt) {
        // this.offerForm.studentId = this.selectedStudent.id;
        // this.offerForm.id = this.selectedOffer.id;

        // console.log("Updating!", this.offerForm);

        fetch('api/books/update.php', {
            method:'POST',
            body: JSON.stringify(this.bookForm),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.books = json;

            // reset the form
            this.resetbookForm();
          });
      },

       postDeleteOffer(o) {
        if (!confirm("Are you sure you want to delete the offer from "+o.companyName+"?")) {
          return;
        }
        console.log("Delete!", o);

        fetch('api/offer/delete.php', {
            method:'POST',
            body: JSON.stringify(o),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.json() )
          .then( json => {
            console.log("Returned from post:", json);
            // TODO: test a result was returned!
            this.offers = json;

            // reset the form
            this.resetOfferForm();
          });
      },

          selectBookToEdit(o) {
          this.selectedOffer = o;
          this.bookForm = Object.assign({}, this.selectedOffer);
      },
          resetOfferForm() {
          this.selectedOffer = null;
          this.bookForm = {};
      }


      //   postDeleteBook(evt) {  
      //       if (!confirm("Are you sure you want to delete the book"))        
                

      //       fetch('api/books/delete.php', {
      //           method:'POST',
      //           body: JSON.stringify(this.bookForm),
      //           headers: {
      //             "Content-Type": "application/json; charset=utf-8"
      //           }
      //         })
      //         .then( response => response.json() )
      //         .then( json => {
      //           console.log("Returned from post:", json);
      //           // TODO: test a result was returned!
      //           this.books = json;
      //           this.bookForm ={};
      //     });
      // }
      
      
    },


    


        
    created() {
        this.fetchBookData();
    } //end created
} // end Offer config
  
Vue.createApp(Books).mount('#booksApp');