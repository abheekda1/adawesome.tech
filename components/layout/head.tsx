import DocHead from 'next/head';

export default function Head({ title }: { title: string }) {
  return (
    <DocHead>
      <title>{`${title} ⸬ ADAT`}</title>

      {/* metadata */}
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content={`${title} ⸬ ADAT`} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://adawesome.tech' />
      <meta property='og:image' content='https://adawesome.tech/img/logo.png' />
      <meta
        property='og:description'
        content={
          "I'm Abheek, a passionate developer intent on learning everything there is to learn about many interesting technology-related topics. These include, but are not limited to: programming languages such as Go, C++, and TypeScript; the workings of OSes on a software level as well as the hardware counterpart; and finally the inner workings of different software, games, and other media and reverse engineering them. In addition, I run a YouTube channel where I post tech videos. I hope this website will serve as a hub for my many different endeavors and will allow for others to follow along or learn something."
        }
      />
      <meta name='theme-color' content='#112' />
    </DocHead>
  );
}
