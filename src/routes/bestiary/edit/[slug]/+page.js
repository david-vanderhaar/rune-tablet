export const prerender = false;

export const load = ({ params }) => {
  return {
      uuid: params.slug
  }
}