import React, { useState } from 'react';

const Card = ({
  imageSrc,
  imageAlt = 'Card image',
  heading,
  description,
  width = '300px',
  height = '400px',
  borderRadius = '12px',
  boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor = 'white',
  padding = '20px',
  headingColor = 'black',
  descriptionColor = '#666',
  fontSize = '16px',
  hoverEffect = true,
  className = '',
  style = {},
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width,
    height,
    borderRadius,
    boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.15)' : boxShadow,
    backgroundColor,
    padding,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    transform: isHovered ? 'translateY(-5px)' : 'none',
    cursor: hoverEffect ? 'pointer' : 'default',
    ...style
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };

  const headingStyle = {
    color: headingColor,
    fontSize: '1.5em',
    margin: '10px 0 5px 0',
    fontWeight: 'bold'
  };

  const descStyle = {
    color: descriptionColor,
    fontSize,
    lineHeight: 1.5,
    flexGrow: 1
  };

  return (
    <div
      className={`card ${className}`}
      style={cardStyle}
      onMouseEnter={() => hoverEffect && setIsHovered(true)}
      onMouseLeave={() => hoverEffect && setIsHovered(false)}
      {...props}
    >
      {imageSrc && <img src={imageSrc} alt={imageAlt} style={imageStyle} />}
      {heading && <h3 style={headingStyle}>{heading}</h3>}
      {description && <p style={descStyle}>{description}</p>}
    </div>
  );
};

export default Card;