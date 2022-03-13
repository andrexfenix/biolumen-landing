import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Future"
      description="We want to build a better future for all of us."
      image="/2.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Biolumen is, and will be, an Ecopark Business
      Tech Club, a knowledge house for  development on blockchain and web3.0 technologies besides solutions for global problems, eco-friendly and self-sustainable. A common physical reference for the crypto community."
      image="/3.5.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="For this year we want to reach a first structural phase, launching our project in a blockchain ecosystem"
      image="/4.jpg"
      imageAlt="Third feature alt text"
    />
    <img
      style={{ paddingTop: 10 }}
      src={'/roadmap.jpg'}
      alt={'roadmap'}
      height={500}
      width={980}
    />
  </Section>
);

export { VerticalFeatures };
