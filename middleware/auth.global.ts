export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from);
  if (to.path === "/") {
    return navigateTo("/custom");
  }
});
