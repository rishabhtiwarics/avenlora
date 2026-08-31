import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import InnerBanner from '../components/common/InnerBanner.jsx';

export default function Contact() {
  return <><InnerBanner eyebrow="Talk To Us" title="Contact" paragraph="Questions about fragrance, gifting, or orders? Reach the Avenlora team." /><section className="page-section container contact-grid"><div><p><MapPin /> Delhi, India</p><p><Phone /> +91 98765 43210</p><p><Mail /> hello@avenlora.com</p></div><form><input placeholder="Name" /><input placeholder="Email" /><textarea placeholder="Message" /><button className="primary-btn">Send Message</button></form></section></>;
}
