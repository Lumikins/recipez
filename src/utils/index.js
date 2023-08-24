// fetch data from the API using the user search input as our parameter

export async function fetchRecipes(filter) {
  const { search, limit } = filter;
  const url = `https://api.edamam.com/search?q=${search}&app_id=${
    import.meta.env.VITE_APP_EDAMAM_ID
  }&app_key=${import.meta.env.VITE_APP_EDAMAM_KEY}&from=0&to=${limit}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data?.hits;
}

// fetch recipe for single item

export async function fetchRecipe(id) {
  const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${
    import.meta.env.VITE_APP_EDAMAM_ID
  }&app_key=${import.meta.env.VITE_APP_EDAMAM_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data[0];
}
