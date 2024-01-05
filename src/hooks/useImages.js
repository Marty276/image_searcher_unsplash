import { useState, useRef } from "react"

export function useImages(){
    
    const accessKey = "XnFPa-rR-vQWWlJOEiw9H3OmRNA8ffwgeAA3PZu9wew"
    const url = (pageToGet, query, accessKey) => {
        return `https://api.unsplash.com/search/photos/?per_page=20&page=${pageToGet}&query=${query}&client_id=${accessKey}`
    }
    const [imagesList, setImagesList] = useState([])
    const [errorMessage, setErrorMessage] = useState(false)
    const page = useRef(1)

    function requestImages(query, keepCurrentList){

        setErrorMessage("")

        fetch(url(page.current, query, accessKey))
            .then(res => res.json())
            .then(data => {
                setImagesList(keepCurrentList
                    ? imagesList.concat(data.results)
                    : data.results
                    )
                    if (data.total === 0){
                        setErrorMessage("Sorry, there's no results for this search")
                    }
            })
    }

    function newSearch(query){
        page.current = 1
        requestImages(query, false)
    }

    function loadMoreImages(query){
        page.current ++
        requestImages(query, true)
    }

    return {imagesList, errorMessage, newSearch, loadMoreImages}
}