import React from "react";
import { Container, Section, SectionTitle } from "@/components/landing";
import styled from "styled-components";
import { color, fontSize, spacing } from "@/styling/mixins";

import { down } from "styled-breakpoints";

import { EXPERIENCE_IMAGES, SECTIONS } from "./constants";

const OurExperience = () => (
  <>
    <Section>
      <Container>
        <SectionTitle id={SECTIONS.ourExperience.href} accentColor="yellow">
          <Title>
            Що ми <span>вміємо?</span>
          </Title>
          <Description>
            Є досвід і трусиків для персиків і шуб, але найчастіше ми шиємо:
          </Description>
        </SectionTitle>
        <ImagesContainer>
          {EXPERIENCE_IMAGES.map(({ src, title }) => (
            <ImageCard key={src}>
              <Image src={src} alt={title} />
              <h4>{title}</h4>
            </ImageCard>
          ))}
        </ImagesContainer>
      </Container>
    </Section>
    <YearsSection background="primaryBlack">
      <Container>
        <YearsContent>
          <YearsWorking>24 роки на ринку</YearsWorking>
          <h2>працюємо з усією Україною</h2>
          <h2>вміємо шити все: від трусів до курток</h2>
          <h2>пошиття партій від 10 одиниць</h2>
        </YearsContent>
      </Container>
    </YearsSection>
  </>
);

export default OurExperience;

const Title = styled.div`
  box-sizing: border-box;
  && {
    margin-bottom: ${spacing(2)};
  }
`;

const Description = styled.h3`
  && {
    ${down("lg")} {
      ${fontSize("sm")};
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing(4)} ${spacing(3)};

  //flex-direction: column;
  ${down("lg")} {
    justify-content: center;
  }
`;

const Image = styled.img`
  display: block;
  max-height: 100%;
  width: 100%;
  max-width: 100%;
  border: 1px dashed ${color("primaryBlack")};
  margin-bottom: ${spacing(2)};
  object-fit: cover;

  ${down("lg")} {
    width: auto;
    height: 300px;
  }
`;

const ImageCard = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 25%;
  text-transform: uppercase;

  &:nth-child(2n) {
    width: 45%;
  }

  && {
    ${down("lg")} {
      width: auto;
      flex-basis: 320px;
      max-width: 500px;
    }
  }
`;

const YearsSection = styled(Section)`
  color: ${color("yellow")};
  text-transform: uppercase;
`;

const YearsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(8)} 0;

  ${down("lg")} {
    gap: ${spacing(4)};
    && h2 {
      ${fontSize("lg")};
    }
  }
`;

const YearsWorking = styled.h2`
  width: max-content;
  padding: ${spacing(1)};
  color: ${color("primaryBlack")};
  background-color: ${color("white")};
`;
