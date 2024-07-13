import Header from "../component/header"
import Footer from "../component/footer"
import Books from "../data/books_info"

function Home_() {

    let books = Books();

    

    return (
        <div className="container">
            {/* <Header></Header> */}
            <main>
                {books.map((book)=>(
                    <div key={book.id} className="card">
                        <img src={book.img_url} alt="" />
                        <h2>{book.title}</h2>
                        <h4>{book.author}</h4>
                        <p>{book.isbn}</p>
                    </div>

                )) }
            </main>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Home_;