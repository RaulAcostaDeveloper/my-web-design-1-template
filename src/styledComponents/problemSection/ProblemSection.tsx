import { ProblemSectionContent } from "./ProblemSection.model"

export const ProblemSection = (contentOfProblemSection: ProblemSectionContent) => {
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