import SectionHeading from "../components/ui/SectionHeading";
import ProjectSlider from "../components/common/ProjectSlider";
import Inner from "../components/layout/Inner";
import { filmProjects } from "../data/videoProjects";

export default function FilmSection() {
  return (
    <section className="section-padding">
      <Inner>
        <SectionHeading>Film Production</SectionHeading>
      </Inner>

      <Inner gutter={false} className="sm:px-8">
        <ProjectSlider projects={filmProjects} />
      </Inner>
    </section>
  );
}
