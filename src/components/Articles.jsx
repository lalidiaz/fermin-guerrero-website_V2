import { HoverComponent, RichText } from "@/components/index";
import styled from "styled-components";

const Articles = ({ data = [] }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <NoArticles>No articles available</NoArticles>;
  }

  return (
    <ArticlesContainer role="feed" aria-label="Articles list">
      {data.map((article) => {
        const { fields, id } = article;
        if (!fields) return null;

        const { year, url, image, description, id: articleId } = fields;

        return (
          <ArticleWrapper key={articleId || id}>
            <HoverComponent
              item={article}
              year={year}
              link={url}
              url={image}
              index={fields}
            >
              <RichText texts={description} />
            </HoverComponent>
          </ArticleWrapper>
        );
      })}
    </ArticlesContainer>
  );
};

const ArticlesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ArticleWrapper = styled.article`
  position: relative;
`;

const NoArticles = styled.div`
  padding: 2rem;
  text-align: center;
  color: #666;
  font-style: italic;
`;

export default Articles;
