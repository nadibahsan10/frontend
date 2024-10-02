import React from "react";
import { Container } from "@mui/material";
import HeroSection from "./SubComponent/Mentorship/HeroSection";
import ProgramOverview from "./SubComponent/Mentorship/ProgramOverview";
import HowItWorks from "./SubComponent/Mentorship/howItWorks";
import MentorProfiles from "./SubComponent/Mentorship/MentorProfiles";
import UpcomingEvents from "./SubComponent/Mentorship/UpcomingEvents";
import Resources from "./SubComponent/Mentorship/Resources";
import FAQs from "./SubComponent/Mentorship/FAQs";

function MentorShip() {
  return (
    <Container>
      <HeroSection />
      <ProgramOverview />
      <HowItWorks />
      <MentorProfiles />
      <UpcomingEvents />
      <Resources />
      <FAQs />
    </Container>
  );
}

export default MentorShip;
