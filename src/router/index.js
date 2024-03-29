import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Tu Mejor Cafetera de 2021 para disfrutar de un buen café',
      metaTags: [
        {
          name: 'description',
          content:
            'Despierta el barista que llevas dentro y prepara un café con cuerpo y aromático con la mejor cafetera del mercado. Las tenemos todas entra, compara y encuentra tu cafetera ideal.',
        },
      ],
    },
  },
  {
    path: '/automatica/krups-ea8108-roma',
    name: 'KrupsEA8108Roma',
    component: () => import('../views/KrupsEA8108Roma.vue'),
    meta: {
      title: 'Krups EA8108 Roma'
    }
  },
  {
    path: '/politica-de-cookies',
    name: 'Cookies',
    component: () => import('../views/Cookies.vue'),
  },
  {
    path: '/politica-de-privacidad',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
  },
  {
    path: '/aviso-legal',
    name: 'Legal',
    component: () => import('../views/Legal.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
