import { createStyles, Header, Menu, Group, Center, Burger, Container, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  inner: {
    height: '4.2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  image:{
    padding : "2px",
    width :"9.5%"
  },

  links: {

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: "18px",
    fontWeight: "bolder",

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

const links = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/profile',
      label: 'Profile',
    },
    {
      link: '/products',
      label: 'Products',
      links: [
        {
          link: '/cdon',
          label: 'CDON Connector App',
        },
        {
          link: '/productreview',
          label: 'Product Review App',
        },
      ],
    },
    {
      link : "/sustainability",
      label : "Sustainability"
    },
    {
      link: '/certificates',
      label: 'Certificates',
    },
    {
      link: '/contactus',
      label: 'Contact Us',
    },
  ];

export default function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a href={link.link} className={classes.link}>
  {link.label}
</a>
    );
  });

  return (
    <Header height={69} mb={0} style={{position:"fixed"}}>
      <Container>
        <div className={classes.inner}>
          <img className={classes.image} src='https://static.wixstatic.com/media/0f4522_7199990f07044bbea31a8a28fb0a47ce~mv2.png/v1/fill/w_110,h_56,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0f4522_7199990f07044bbea31a8a28fb0a47ce~mv2.png' />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
        </div>
      </Container>
    </Header>
  );
}