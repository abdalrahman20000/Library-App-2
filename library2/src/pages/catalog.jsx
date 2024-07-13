
import { useEffect, useState } from "react"
import axios from "axios"

function Catalog() {


    const [data, set_data] = useState([]);




    useEffect(() => {
        axios.get("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app//books/boooks/boooks/.json")
            .then(res => set_data(res.data))
            .catch(err => console.log(err))


    }, []);

    function update_data() {
        const book__id = sessionStorage.getItem("book_id");
        // alert(book__id)

        axios.put("https://library-74096-default-rtdb.europe-west1.firebasedatabase.app//books/boooks/boooks/" + book__id + ".json",
            {

                author: document.getElementById("author").value,
                id: book__id,
                isbn: document.getElementById("isbn").value,
                title: document.getElementById("title").value

            }
        )
            .catch(err => console.log(err))

    }


    // console.log(data);

    // console.log(data);




    return (

        <main>
            {Object.values(data).map((tracker, index) => (
                <div key={index} className="card">
                    <h2>{tracker.title}</h2>
                    <h4>{tracker.author}</h4>
                    <p>{tracker.isbn}</p>
                    <button>Delete</button>
                    {/* <p>{tracker.id}</p> */}
                    <button onClick={() => (document.getElementById("update").style.display = "block", sessionStorage.setItem("book_id", tracker.id))}>Update</button>
                </div>
            ))}
            <div id="update">
                <form  >
                    <label htmlFor="">Title :
                        <br />
                        < input type="text"
                            id="title"
                            required
                        />
                    </label>

                    <label htmlFor="">Author :
                        <br />
                        < input type="text"
                            id="author"
                            required

                        />
                    </label>

                    <label htmlFor="">isbn :
                        <br />
                        < input type="text"
                            id="isbn"
                            required

                        />
                    </label>

                    <button type="click" onClick={update_data}>Update</button>
                </form>
            </div>
        </main>
    );

}

export default Catalog;