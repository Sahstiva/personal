<template>
  <navigation-menu />
  <side-navigation class="experience-navigation"/>
  <section class="experience">
    <code-rows />
    <div class="experience-content">
      <h3 class="experience-content-title">Experience</h3>
      <div class="experience-content-item">
        <img src="/img/epam_systems_logo.jpg" alt="epam systems logo" width="100" height="100"/>
        <div class="experience-content-item-brief">
          <p class="experience-content-item-subtitle">Senior Software Engineer</p>
          <p class="experience-content-item-place">EPAM Systems · Full-time</p>
          <p class="experience-content-item-place">{{ DateTime.fromISO('2022-02').toFormat('LLL yyyy')}} - Present · {{ getTimeDiff(DateTime.fromISO('2022-02'), DateTime.now()) }}</p>
          <p class="experience-content-item-place">Mersin, Turkey · Remote</p>
        </div>
      </div>
      <p>In my current role at EPAM Systems, I excel as a Node.js API developer for a high-traffic international fashion e-commerce platform. My key achievements encompass:</p>
      <p>&nbsp;</p>
      <ul>
        <li>Engineered and sustained a resilient microservices architecture, fortifying the platform's capability to manage vast data sets and withstand high user loads.</li>
        <li>Orchestrated and executed a seamless migration of millions of users across cloud infrastructures, ensuring uninterrupted site functionality in areas like login and checkout. Significantly, I authored Python scripts for migrating extensive purchase histories, employing multiprocessing techniques for accelerated data transformation and efficient API interactions.</li>
        <li>Designed and maintained vital user-centric services, governing authentication, sign-up, login, and subscription actions, which enhanced user experience and elevated customer satisfaction.</li>
        <li>Devised an advanced automated user notification system that alerts customers about product price changes or inventory updates, boosting user engagement and stimulating sales.</li>
        <li>Utilized my expertise in Google Cloud Platform and AKAMAI Identity Cloud to fine-tune operations and guarantee frictionless user interactions.</li>
        <li>Collaborated with external services such as Sailthru and Forter, to seamlessly integrate and manage customer data.</li>
      </ul>
      <p>&nbsp;</p>
      <p><span style="font-weight: 600">Skills:</span> JSON Web Token (JWT) · Jest (JavaScript Framework) · Agile Methodologies · REST APIs · Git · ES6 · NoSQL · Service-Oriented Architecture (SOA) · Microservices · Express.js · Code Review · Unit Testing · Akamai · Salesforce.com · Grafana · Apigee API Management · Docker · TypeScript · Jest · Google Cloud Platform (GCP) · Redis · Node JS · Python (Programming Language)</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import SideNavigation from "~/components/SideNavigation.vue";
import { DateTime } from "luxon";
const getTimeDiff = (start: DateTime, end: DateTime) => {
  const diff = end.diff(start, ['years', 'months']).toObject();
  return `${diff.years} yrs ${Math.ceil(diff.months || 0)} mos`;
}
</script>
<style scoped lang="scss">
.experience {
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
    &-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin: 0 0 20px 0;
      &-brief {
        margin: 0 0 0 20px;
      }
      &-place {
        color: rgb(202, 205, 204);
      }
      &-subtitle {
        margin: 0 0 5px 0;
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
}
</style>

