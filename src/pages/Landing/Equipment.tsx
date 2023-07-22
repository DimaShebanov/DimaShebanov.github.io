import React from "react";
import { Container, Section, SectionTitle } from "@/components/landing";
import styled, { css } from "styled-components";
import { color, spacing } from "@/styling/mixins";
import {
  EQUIPMENT_SECTIONS,
  SECTIONS,
  SLIDER_IMAGES,
} from "@/pages/Landing/constants";
import { Carousel } from "react-responsive-carousel";
import { down } from "styled-breakpoints";

const Equipment = () => (
  <Section background="yellow">
    <Container>
      <StyledSectionTitle id={SECTIONS.equipment.href} accentColor="white">
        Наше <span>обладнання</span>
      </StyledSectionTitle>
      <Content>
        <StyledCarousel
          // autoPlay
          // stopOnHover
          infiniteLoop
          renderIndicator={(clickHandler, isSelected) => (
            <CarouselIndicator onClick={clickHandler} isSelected={isSelected} />
          )}
          swipeable
          showStatus={false}
          showArrows={false}
          showThumbs={false}
        >
          {SLIDER_IMAGES.map((imageSrc) => (
            <Image src={imageSrc} key={imageSrc} />
          ))}
        </StyledCarousel>
        <RightSide>
          {EQUIPMENT_SECTIONS.map(({ title, values }) => (
            <EquipmentSection key={title}>
              <h4>{title}</h4>
              <ul>
                {values.map((value) => (
                  <li key={value}>
                    <h6>{value}</h6>
                  </li>
                ))}
              </ul>
            </EquipmentSection>
          ))}
        </RightSide>
      </Content>
    </Container>
  </Section>
);

export default Equipment;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spacing(3)};

  ${down("lg")} {
    grid-template-columns: 1fr;
    grid-template-rows: min-content 1fr;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  ${down("sm")} {
    span {
      display: block;
      word-break: break-word;
      padding: ${spacing(0.5)};
    }
  }
`;

const StyledCarousel = styled(Carousel)`
  .control-dots {
    display: flex;
    gap: ${spacing(2)};
    align-items: center;
    list-style: none;
    justify-content: center;
    bottom: ${spacing(4)};
  }
`;

const selectedCSS = css`
  width: ${spacing(3)};
  height: ${spacing(3)};
  background-color: ${color("white")};
`;

const CarouselIndicator = styled.li<{ isSelected: boolean }>`
  border-radius: 50%;
  transition: 300ms ease;
  width: ${spacing(2)};
  height: ${spacing(2)};
  background-color: ${color("primaryBlack")};

  ${(p) => p.isSelected && selectedCSS};
`;

const Image = styled.div<{ src: string }>`
  background-image: url("${(p) => p.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 600px;

  ${down("md")} {
    min-height: 400px;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(4)};
`;

const EquipmentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing(3)};

  h4 {
    text-transform: uppercase;
  }

  ul {
    padding-left: ${spacing(2)};
    margin: 0;
  }
`;
