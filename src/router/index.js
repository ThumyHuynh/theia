import { createRouter, createWebHistory } from 'vue-router'
import TopicPage from '../views/TopicPage.vue'
import AboutPage from '../views/AboutPage.vue'
import Sub00elements from '../views/subtopics/Sub00elements.vue'
import Sub01journey from '../views/subtopics/Sub01journey.vue'
import Sub02build from "@/views/subtopics/Sub02build.vue";
import Sub03who from "@/views/subtopics/Sub03who.vue";
import Sub03embed from "@/views/subtopics/Sub03embed.vue";
import Sub04how from "@/views/subtopics/Sub04how.vue";
import Sub05data from "@/views/subtopics/Sub05data.vue";
import Sub06pervasiveness from "@/views/subtopics/Sub06pervasiveness.vue";
import Sub06WhereData from "@/views/subtopics/Sub06WhereData.vue";
import Sub07gdpr from "@/views/subtopics/Sub07gdpr.vue";
import Sub08pet from "@/views/subtopics/Sub08pet.vue";
import Sub09protect from "@/views/subtopics/Sub09protect.vue";
import FaqPage from "@/views/FaqPage.vue";
import GlossarPage from "@/views/GlossarPage.vue";
import Sub03whyTrack from "@/views/subtopics/Sub03whyTrack.vue";
import Sub06WhoTrack from "@/views/subtopics/Sub06WhoTrack.vue";
import Sub02MapOfInternet from "@/views/subtopics/Sub02MapOfInternet.vue";




const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TopicPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/sub00elements',
      name: 'sub00elements',
      component: Sub00elements,

    },
    {
      path: '/sub01journey',
      name: 'sub01journey',
      component: Sub01journey

    },
    {
      path: '/sub02build',
      name: 'sub02build',
      component: Sub02build
    }, {
      path: '/sub02map',
      name: 'sub02map',
      component: Sub02MapOfInternet
    },
    {
      path: '/sub03who',
      name: 'sub03who',
      component: Sub03who
    },
    {
      path: '/sub03whyTrack',
      name: 'sub03whyTrack',
      component: Sub03whyTrack
    },
    {
      path: '/sub03embed',
      name: 'sub03embed',
      component: Sub03embed
    },
    {
      path: '/sub03who',
      name: 'sub03who',
      component: Sub03who
    },
    {
      path: '/sub04how',
      name: 'sub04how',
      component: Sub04how
    },
    {
      path: '/sub05data',
      name: 'sub05data',
      component: Sub05data
    },
    {
      path: '/sub06pervasiveness',
      name: 'sub06pervasiveness',
      component: Sub06pervasiveness
    },
    {
      path: '/sub06whoTrack',
      name: 'sub06whoTrack',
      component: Sub06WhoTrack
    },
    {
      path: '/sub06whereData',
      name: 'sub06whereData',
      component: Sub06WhereData
    },
    {
      path: '/sub07gdpr',
      name: 'sub07gdpr',
      component: Sub07gdpr
    },
    {
      path: '/sub08pet',
      name: 'sub08pet',
      component: Sub08pet
    },
    {
      path: '/sub09protect',
      name: 'sub09protect',
      component: Sub09protect
    },
    {
      path: '/faq',
      name: 'faq',
      component: FaqPage
    },
    {
      path: '/glossar',
      name: 'glossar',
      component: GlossarPage
    }
  ],

  scrollBehavior(to, from, savedPosition) {
    return { top: -1 };
  }


})

export default router
