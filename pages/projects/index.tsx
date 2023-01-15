import { useRouter } from 'next/router';
import ProjectList from '../../components/project/projectList';
import getProject, { Metadata } from '../../util/getProject';
import { useState } from 'react';
import Layout from '../../components/layout';

export const getStaticProps = getProject;

const Projects = ({ projects }: { projects: Array<Metadata> }) => {
  const router = useRouter();

  const [projectList, setProjectList] = useState<Array<Metadata>>(projects);

  return (
    <Layout title='Projects'>
      <ProjectList projects={projectList} />
    </Layout>
  );
};

export default Projects;
