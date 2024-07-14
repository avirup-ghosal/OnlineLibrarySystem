

import { useEffect, useState } from "react";
import { Books } from "./Books";

export function Test(props) {
    const [bookComponents, setBookComponents] = useState([]);
    const subjects = props.subjects;
    const links = props.links;

    useEffect(() => {
        async function fetchBooks() {
            const fetchedBookComponents = await Promise.all(subjects.map(async (subject, index) => {
                try {
                    const res = await fetch("http://localhost:3002/" + subject);
                    const json = await res.json();
                    const books = json.books;
                    const subjectname = books[0].subject;

                    const bodyContent = books.map((book, index) => (
                        <div key={index} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            <img style={{ height: "160px", width: "120px", padding: "20px" }} src={book.image} alt={`Book ${index}`} />
                        </div>
                    ));

                    return (
                        <div key={subject} style={{ fontSize: "30px" }}>
                            {subjectname}
                            <Books key={subject} body={bodyContent.slice(0, 5)} link={"\\" + links[index]} />
                        </div>
                    );
                } catch (error) {
                    console.error(`Error fetching ${subject} books:`, error);
                    return null;
                }
            }));

            setBookComponents(fetchedBookComponents.filter(component => component !== null));
        }

        fetchBooks();
    }, [subjects,links]);

    return (
        <div style={{ backgroundColor: '#000080', color: "white" }}>
            <h2 style={{ textAlign: "center" }}>Books</h2>
            <div>
                {bookComponents}
            </div>
        </div>
    );
}
