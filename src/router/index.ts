import { createRouter, createWebHistory } from "vue-router";
import SurveysListView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: SurveysListView,
    },
    {
      path: "/surveys/:type?",
      name: "surveys",
      component: SurveysListView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundView,
    },
  ],
});

export default router;
