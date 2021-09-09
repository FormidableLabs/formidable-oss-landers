import React from "react";
import PropTypes from "prop-types";
import Grid from "./Grid";
import Section from "./Section";

const CustomSection = ({
  className,
  color,
  components,
  description,
  title,
}) => {
  return (
    <Section className={className} color={color}>
      {title ? <Section.Title>{title}</Section.Title> : null}
      <Grid>
        {description ? <Section.Text>{description}</Section.Text> : null}
        {components.map((component, index) => {
          return React.cloneElement(component, {
            key: `custom-section-${index}`,
          });
        })}
      </Grid>
    </Section>
  );
};

CustomSection.propTypes = {
  className: PropTypes.string,
  color: Section.propTypes.color,
  /* Section title */
  title: PropTypes.string,
  /* One sentence about how to get started using this thing.  */
  description: PropTypes.string,
  /* Array of custom components */
  components: PropTypes.array,
};

export default CustomSection;
