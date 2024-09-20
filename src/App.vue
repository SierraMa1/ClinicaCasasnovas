<template>
  <PageIndex/>
   <HeroSection />
   <AboutUs />
   <ClinicSection />
   <OurTeam />
  <ComparacionImagen />
   <ServiceClinic />
   <TestimoniosPacientes/>
   <WhatsAppButton />
  <FAQ />
  <ContactSection />
   <FinalPage />
</template>

<script>

import PageIndex from './components/PageIndex.vue'
 import HeroSection from './components/HeroSection.vue';
import ContactSection from './components/ContactSection.vue';
import AboutUs from './components/AboutUs.vue';
import ServiceClinic from './components/ServicesClinic.vue';
import TestimoniosPacientes from './components/TestimoniosPacientes.vue';
import OurTeam from './components/OurTeam.vue';
//import FormContact from './components/FormContact.vue';
//import LocationMap from './components/LocationMap.vue';
import FAQ from './components/FAQ.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
import FinalPage from './components/FinalPage.vue';
import ClinicSection from './components/ClinicSection.vue';
import ComparacionImagen from './components/ComparacionImagen.vue';


export default {
  name: 'App',
  components: {
   
    PageIndex,
    HeroSection,
    AboutUs,
    OurTeam,
    ClinicSection,
    ServiceClinic,
    TestimoniosPacientes,
    ComparacionImagen,
    //FormContact,
    //LocationMap,
    FAQ,
    WhatsAppButton,
    ContactSection,
    FinalPage,
    
  }
}
</script>

<style>

</style>
