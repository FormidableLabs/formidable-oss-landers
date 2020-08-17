/* Example config for Renature OSS Lander */
import React from "react";
// import Link from "../../../../src/components/Link";
import { FeaturedBadge, ProjectBadge } from "formidable-oss-badges";
import nightOwl from "prism-react-renderer/themes/nightOwl";

import featureSvg from "../../assets/feature.svg";

const config = {
  colors: {
    lighterPrimary: "#F8F7FE",
    lightPrimary: "#D6CFF9",
    primary: "#7860ED",
    darkPrimary: "#5443A6",
    darkerPrimary: "#30265F",

    lightComplement: "#7A7441",
    darkComplement: "#595112",
  },
  // linkComponent: Link,
  header: {
    title: "Renature",
    badge: <FeaturedBadge name="renature" />,
    description:
      "A physics-based animation library for React inspired by the natural world.",
    install: "npm install renature",
    button: {
      label: "Documentation",
      href: "docs/",
    },
    nav: [
      { label: "Docs", href: "docs/" },
      { label: "Gallery", href: "gallery/" },
      {
        label: "Issues",
        href: "https://www.github.com/FormidableLabs/renature/issues",
      },
      {
        label: "Github",
        href: "https://github.com/FormidableLabs/renature",
      },
    ],
  },
  features: {
    list: [
      {
        image: featureSvg,
        title: "Declarative React hooks for animating with ease",
        description:
          "Tweak your physics parameters, set from and to values for your CSS properties, and let renature do the rest.",
      },
      {
        image: featureSvg,
        title: "Gravity, Friction, Fluid Resistance, and more",
        description:
          "Renature explores forces that other physics-based animation libraries typically leave out, giving your animations unique feeling and intuitive motion.",
      },
      {
        image: featureSvg,
        title: "An animation library for physics nerds",
        description:
          "Renature emphasizes mathematical precision and correctness, all backed by the type safety and speed of ReasonML.",
      },
    ],
  },
  preview: {
    title: "Beautiful, Simple Animations",
    theme: nightOwl,
    list: [
      {
        title: "Animate Intuitively, Animate With Joy",
        description:
          "UI animation should be intuitive, simple, and fun. Renature is all about returning joy and whimsy to your UI animations.",
        props: {
          code: `import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`,
          scope: ``,
        },
      },
      {
        title: "Responsive Animations",
        description:
          "Renature hooks respond directly to changes in their from, to, and config properties. Just update a value and your animation will begin running.",
        props: {
          code: `import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`,
        },
      },
      {
        title: "Animate in Two Dimensions",
        description:
          "Renature uses two-dimensional vectors to back its physics, giving you the ability to build beautiful and accurate animations in Cartesian space.",
        props: {
          code: `import React from 'react';

class Counter extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ count: state.count + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <center>
        <h3>
          {this.state.count}
        </h3>
      </center>
    )
  }
}
`,
        },
      },
    ],
  },
  customSection: {
    color: "dark",
    title: "My custom section",
    description: "I love custom sections!!",
    components: [],
  },
  getStarted: {
    description:
      "Renature comes equipped with a lightweight set of production ready React hooks. Dig into the documentation to start animating!",
    button: {
      label: "Documentation",
      href: "docs/",
    },
  },
  featuredOss: {
    title: "More Open Source from Formidable",
    list: [
      {
        badge: <FeaturedBadge name="victory" />,
        href: "https://formidable.com/open-source/victory",
        title: "Victory",
        description:
          "An ecosystem of modular data visualization components for React. Friendly and flexible.",
      },
      {
        badge: <FeaturedBadge name="urql" />,
        href: "https://formidable.com/open-source/urql",
        title: "urql",
        description:
          "Universal React Query Library is a blazing-fast GraphQL client, exposed as a set of ReactJS components.",
      },
      {
        badge: <FeaturedBadge name="spectacle" />,
        href: "https://formidable.com/open-source/spectacle",
        title: "Spectacle",
        description:
          "A React.js based library for creating sleek presentations using JSX syntax that gives you the ability to live demo your code.",
      },
      {
        badge: (
          <ProjectBadge
            isHoverable={false}
            color="#80EAC7"
            abbreviation="Rp"
            description="Runpkg"
          />
        ),
        href: "https://formidable.com/open-source/runpkg",
        title: "Runpkg",
        description:
          "The online package explorer. Runpkg turns any npm package into an interactive and informative browsing experience.",
      },
    ],
  },
};

export default config;
