import featureSvg from "./assets/feature.svg";
import nightOwl from "prism-react-renderer/themes/nightOwl";

export const data = {
  features: {
    title: "Features",
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
};
