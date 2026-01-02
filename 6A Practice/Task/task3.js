

 function fetchBooks(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1){
                resolve ([
                     { title: "The Stars My Destination", authorId: 1, genre: "Science Fiction", quantity: 5 },
                    { title: "Neuromancer", authorId: 2, genre: "Science Fiction", quantity: 3 },
                    { title: "Pride and Prejudice", authorId: 3, genre: "Classic", quantity: 4 },
                    { title: "Snow Crash", authorId: 2, genre: "Science Fiction", quantity: 2 }
                ]);
            }else{
                reject("failed the fetch books");
            }
        }, 1000);
    });
 }

 function fetchAthours(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1){
                resolve ([
                    { id: 1, name: "Alfred Bester", birthYear: 1913 },
                    { id: 2, name: "William Gibson", birthYear: 1948 },
                    { id: 3, name: "Jane Austen", birthYear: 1775 }

                ]);
            }else{
                reject ("failed the fetch Athours");
            }
        }, 1000);
    });
 }

 async function getBooksAthours(){
    try{
        const [books,Athours] = await Promise.allSettled([fetchBooks(),fetchAthours()]);

        if(books.status === "rejected"){
            console.log("books error:", books.reason);
            return;
        }

        if(Athours.status === "rejected"){
            console.log("Athours error:", Athours.reason);
            return;
        }

        const bookss = books.value;
        const Athourss = Athours.value;

        const sifibooks = bookss.filter(book => book.genre === "Science Fiction");

        const result = sifibooks.map(book => {
            const author = Athourss.find(a => a.id === book.authorId);
            return{
                title: book.title,
                authourName: author ? author.name : "UnKnown",
                birthYear: author ? author.birthYear : "UnKnown"
            };
        });

        console.log("Science boooks with Author:");
        console.log(result);
        return result;

    }catch(err){
        console.log("error:", err);
    }
    
 }
 getBooksAthours()