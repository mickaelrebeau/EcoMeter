export default defineNuxtRouteMiddleware(async (to) => {
  // Access the Supabase client using the Nuxt composable
  const supabase = useSupabaseClient();

  // Get the current session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If user is not authenticated and trying to access a protected route
  if (!session && to.path !== "/register") {
    return navigateTo("/register");
  }

  // If user is authenticated and trying to access the login page
  if (session && to.path === "/register") {
    return navigateTo("/dashboard");
  }
});
