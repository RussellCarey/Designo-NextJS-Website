import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";

import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <Container noLetsTalk={true}>
      <ContactForm />
    </Container>
  );
}
