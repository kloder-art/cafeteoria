export const excerpt = (str) =>
  str.replace('\n', '').split(' ').slice(0, 23).join(' ') + '...';
