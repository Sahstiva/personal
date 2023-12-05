<template>
  <navigation-menu />
  <side-navigation class="about-navigation"/>
  <section class="about">
    <code-rows />
    <div class="about-content">
      <h3 class="about-content-title">About me</h3>
      <p>Dynamic Software Engineer with over 10 years of experience, specializing in Node.js API development within the e-commerce sector. Armed with a strong understanding of REST API principles, I offer comprehensive expertise in a suite of technologies like Node, Express, Inversify.</p>
      <p>Fluent in both front-end and back-end languages, including Python, PHP, Vue.js, and ES6.</p>
      <p>Proficient in database management with Redis, MongoDB, MySQL, and PostgreSQL.</p>
      <p>Skilled in Google Cloud Platform and versed in CI/CD practices. Adept in TypeScript, my solutions are always anchored in industry best practices.</p>
      <p>A passion for elegant, flexible code drives my methodical approach to problem-solving.</p>
      <p>&nbsp;</p>
      <p>As a lifelong learner, I am continually striving to enhance my skillset, which currently includes proficiency in TypeScript, Express, Node.js, and Python. I take great pride in developing and maintaining microservices that drive efficiencies and contribute to the successful operations of the e-commerce platforms I work with.</p>
      <p>&nbsp;</p>
      <p>Beyond my professional life, I'm a passionate sports enthusiast, with a particular interest in endurance events such as marathons, ultramarathons, and trail races. One of my most significant accomplishments in this realm was completing the formidable 80 km Elton Ultra Trail in a semi-desert zone. Embracing a healthy lifestyle, I abstain from smoking, maintaining a balance between my work and personal life.</p>
      <p>&nbsp;</p>
      <p>A dedicated coffee enthusiast, I also hold certifications from the International Specialty Coffee Association in alternative brewing methods. Currently based in the vibrant city of Mersin, Turkey, I thrive in its rich culture and inspiring landscapes.</p>
      <p>&nbsp;</p>
      <p>I invite you to reach out if you have any further questions or if there's anything else you'd like to know about me. I'm always open to discussing new opportunities, sharing my experiences, or simply connecting with fellow professionals in the tech and e-commerce sectors.</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import SideNavigation from "~/components/SideNavigation.vue";
</script>
<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding-left: 250px;
  &-navigation {
    position: fixed;
    left: 0;
  }
  &-content {
    width: 60vw;
    text-align: justify;
    &-title {
      margin: 0 0 20px 0;
    }
  }
}
</style>

