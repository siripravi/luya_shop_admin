export { renderers } from '../renderers.mjs';

const page = () => import('../chunks/prerender_OSMFD1MJ.mjs').then(n => n._);

export { page };
