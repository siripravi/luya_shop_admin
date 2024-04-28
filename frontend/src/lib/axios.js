import axios from "axios";
//import { url } from 'astro/runtime';
export async function fetchAxios(params) {
  const { PUBLIC_GRAPHQL_URL } = import.meta.env;
  let axiosData;
  //const search = Astro.url.searchParams.get('id') || '';
  /*
  let woocommerceSession
  if (localStorage["woocommerce-session"]) {
    woocommerceSession = localStorage["woocommerce-session"]
  }

  const headers = {
    "content-type": "application/json",
    "woocommerce-session": `Session ${woocommerceSession}`
  }
  axios.defaults.withCredentials = true
  try {
    axiosData = await axios({
      url: PUBLIC_GRAPHQL_URL,
      method: "POST",
      headers: headers,
      withCredentials: true,
      data: {
        query: query,
        variables: variables
      }
    })
    if (import.meta.env.DEV && axiosData.data.errors[0].message) {
      console.log("Error:  ", axiosData.data.errors[0].message)
    }

    if (!localStorage["woocommerce-session"]) {
      localStorage["woocommerce-session"] =
        axiosData.headers["woocommerce-session"]
    }
  } catch (e) {
    if (import.meta.env.DEV && axiosData.data.errors) {
      console.log("Error: ", e)
    }
  }
*/
  const url = "http://localhost:3030/api/page"; // + params.pid + "&id=" + params.cid;
/*
  axios
    .post(url, null, {
      params: params,
    })
    .then(function (response) {
      console.log(response.data);
      return response.data.placeholders.content;
    })
    .catch(function (error) {
      console.error(error);
    });
*/
  //const { data } = await this.$axios('page?id=' + this.$route.params.slug)
  
const { data } = await axios.get(url,{params: params});
  return data.placeholders.content;  //.data.data

}
