import DocHead from 'next/head';

export default function Head({ title }: { title: string }) {
  return (
    <DocHead>
      <title>{`${title} ⸬ Abheek Dhawan`}</title>

      {/* metadata */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta
        name='description'
        content="Abheek Dhawan: Computer Science & Astrophysics student at Yale. Experience, projects, and writing."
      />
      <meta property='og:title' content={`${title} ⸬ Abheek Dhawan`} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://abheek.dev' />
      <meta property='og:image' content='https://abheek.dev/img/logo.png' />
      <meta
        property='og:description'
        content={
          "I'm Abheek Dhawan, a Computer Science & Astrophysics student at Yale. Here you'll find my experience, projects, and writing, from research software and tools used by thousands of students to reverse-engineered game audio formats."
        }
      />
      <meta name='theme-color' content='#112' />
    </DocHead>
  );
}
