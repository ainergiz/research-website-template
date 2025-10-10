export function AboutDescription({ html }: { html: string }) {
  if (!html) {
    return null;
  }

  return (
    <section
      className="about-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
