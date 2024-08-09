import React from 'react';
import Text from '../components/Text';
import Section from '../components/Section';
import Link from '../components/Link';
import Icon from '../components/Icon';

function Contact() {
  return (
    <div className="contact">
      <Link href="/" color="primary">Home</Link>
      <Section>
        <Text size="large">Contact me</Text>
        <div className="icons">
          <Icon name="instagram" url="your-instagram-url-here" />
          <Icon name="email" url="your-email-url-here" />
          <Icon name="linkedin" url="your-linkedin-url-here" />
          <Icon name="twitter" url="your-twitter-url-here" />
          <Icon name="github" url="your-github-url-here" />
        </div>
      </Section>
    </div>
  );
}

export default Contact;
