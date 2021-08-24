export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=6sT0q3kdt7RRMH1O77kgAlCfbW4yT9io&limit=10&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  return gifs;
};
