import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';

export const MOCKDATA = [
  {
    icon: "https://static.wixstatic.com/media/0f4522_2201836a9edd4286a4e103f380336ef9~mv2.jpg/v1/fill/w_504,h_336,al_c,lg_1,q_80,enc_auto/4hollow_section-380x254.jpg",
    title: 'Scrap Metal',
    description:
      'Heavy or structural sections are steel products such as beams or columns which are usually formed with a specific cross section shape e.g. H, I or U. Used to build large structures such as multi-storey buildings and bridges.',
  },
  {
    icon: "https://static.wixstatic.com/media/0f4522_52c1df37a82843199feaba944c5023e0~mv2.jpg/v1/fill/w_420,h_280,al_c,lg_1,q_80,enc_auto/16BILLETS-300x240.jpg",
    title: 'Semi-Finished',
    description:
      'Mild Steel Billets are the second-stage product of steel production. They are hot-rolled and are taken out directly during casting process of steel.They are highly ductile and soft and produced in a square cross-section of area less than 36 sq.inc.',
  },
  {
    icon: "https://static.wixstatic.com/media/0f4522_f0055733cd904bdca34cd0a108398ef3~mv2.jpg/v1/fill/w_420,h_280,al_c,lg_1,q_80,enc_auto/Web-Main-Img-3-300x229.jpg",
    title: 'Waste Rubber & Paper',
    description:
      'Waste tyres also known as End-of-Life Tyres are used rubber tyres that because of their abrasion state ("tyre wear") are not safe for public traffic. Un-recycled tyre waste is an enormous global problem because of their non-biodegradability...',
  },
  
];



export function Feature({ icon, title, description }) {
  return (
    <div>

      <img className='product_img' src={icon}></img>

      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} )`,
    paddingBottom: `calc(${theme.spacing.xl} )`,
  },

  title: {

    fontWeight: 900,
    marginBottom: theme.spacing.md,


    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));



export default function FeaturesGrid() {
  const { classes } = useStyles();
  const features = MOCKDATA.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}