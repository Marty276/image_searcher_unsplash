export function ResultsSection({ imagesList }) {
    return (
        <section className="results_section">
            {
                imagesList.length > 0 && imagesList.map((result) => {
                    return (
                        <img src={result.urls.regular} key={result.id} alt={result.alt_description} />
                    )
                })
            }
        </section>
    )
}