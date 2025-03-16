"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  index: number; // Make it required
}

export const WorkProjectCard: React.FC<ProjectCardProps & { index: number }> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  index, 
}) => {
  // Dynamic case study links for the first two projects
  const caseStudyLinks: { [key: number]: string } = {
    0: "/work/1_FossilandWSI",
    1: "/work/2_NRL",
    2: "/work/3_DBCorp",
    3: "/work/4_RevalERP",
    4: "/work/5_ValetRequest"
  };

  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex mobileDirection="column" fillWidth paddingX="s" paddingTop="12" paddingBottom="24" gap="l">
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {index in caseStudyLinks && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={caseStudyLinks[index]} // Correct case study link
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
