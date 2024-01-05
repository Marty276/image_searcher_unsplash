import { useRef} from "react"
import { useImages } from "./hooks/useImages"
import { ResultsSection } from "./components/ResultsSection.jsx"
import "./App.css"

export function App() {

    const {imagesList, errorMessage, newSearch, loadMoreImages} = useImages()
    const inputRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        newSearch(inputRef.current.value)
    }

    function addMoreResults(e){
        loadMoreImages(inputRef.current.value)
    }

    return (
        <>
            <main>

                <h1>Image searcher</h1>
                <p>by Marthy B.</p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" ref={inputRef}></input>
                        <button>Search</button>
                    </div>
                </form>
                
                <ResultsSection imagesList={imagesList}/>
                
                <section className="results_section">
                    {
                        imagesList.length > 0 && <button onClick={addMoreResults}>Load more results</button>
                    }
                    {
                        errorMessage && <p>{errorMessage}</p>
                    }
                </section>

            </main>
        </>
    )
}