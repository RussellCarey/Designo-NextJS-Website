import Head from "next/head";
import Header from "../components/Header";
import HomeMain from "../components/Home-Main";
import Container from "../components/Container";
import CatagorySection from "../components/CatagorySection";
import FeelingsSection from "../components/FeelingsSection";
import LetsTalk from "../components/LetsTalk";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Container>
      <HomeMain />
      <CatagorySection />
      <FeelingsSection />
    </Container>
  );
}
