interface props {
    title: string,
    subtitle: string
}
export const ProblemSection = (contentOfProblemSection: props) => {
    return (
        <section className="problem-section" data-aos="fade-up">
            <div className="container">
                <div className="problem-content">
                    <h2>{contentOfProblemSection.title}</h2>
                    <p>{contentOfProblemSection.subtitle}</p>
                </div>
            </div>
        </section>
    )
}