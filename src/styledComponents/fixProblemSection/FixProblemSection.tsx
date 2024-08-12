const contentOfFixProblemSection = {
    title: 'Devise the best social media marketing strategy with one centralized, robust solution.'
}

interface props {
    title: string
}
export const FixProblemSection = (contentOfFixProblemSection: props) => {
    return (
        <section className="fix-problem-section" data-aos="fade-up">
            <div className="container">
                <div className="fix-problem-content">
                    <h2>{contentOfFixProblemSection.title}</h2>
                </div>
            </div>
        </section>
    )
}