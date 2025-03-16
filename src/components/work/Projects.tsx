import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { WorkProjectCard } from "../WorkProjectCard";

interface WorkProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: WorkProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // const sortedProjects = allProjects.sort((a, b) => {
  //   return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  // });

  const projectOrder = ["1_FossilandWSI", "2_NRL", "3_DBCorp","4_RevalERP","5_ValetRequest"];

  const sortedProjects = allProjects.sort((a, b) => {
    const indexA = projectOrder.indexOf(a.slug);
    const indexB = projectOrder.indexOf(b.slug);
    return indexA - indexB;
  });


  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <WorkProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
          index = {index}
        />
      ))}
    </Column>
  );
}
