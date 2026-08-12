import SectionHeading from "../components/ui/SectionHeading";
import ProjectSlider from "../components/common/ProjectSlider";
import Inner from "../components/layout/Inner";
import { aiFilmProjects } from "../data/videoProjects";

export default function AiFilmSection() {
  return (
    <section id="film" className="section-padding">
      <Inner>
        <SectionHeading>AI Film</SectionHeading>
      </Inner>

      <Inner gutter={false} className="sm:px-8">
        <ProjectSlider projects={aiFilmProjects} />
      </Inner>
    </section>
  );
}
