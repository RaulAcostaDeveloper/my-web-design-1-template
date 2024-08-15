export const FixProblemSection = (contentOfFixProblemSection: FixProblemSectionContent) => {
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