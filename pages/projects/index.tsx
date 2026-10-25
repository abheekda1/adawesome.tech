import ProjectList from '../../components/project/projectList';
import getProject, { Metadata } from '../../util/getProject';
import Layout from '../../components/layout';

export const getStaticProps = getProject;

const Projects = ({ projects }: { projects: Array<Metadata> }) => {
  return (
    <Layout title='Projects'>
      <ProjectList projects={projects} />
    </Layout>
  );
};

export default Projects;
