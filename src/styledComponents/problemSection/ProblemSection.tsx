const contentOfProblemSection = {
    title: 'Tired of running unsuccessful social marketing campaigns?',
    subtitle: 'Your social media strategy cannot be based on guesswork. Get custom auto-generated reports from all your profiles, with SaasBox.'
}
export const ProblemSection = () => {
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