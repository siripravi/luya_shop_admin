import { fetchAxios } from "../../lib/axios";

export async function getSingleProduct(pid) {
  const data = await fetchAxios({ id: 4 , slug:pid});

  //return data?.product;
  return data.filter(function (item) {
    return item.block_name == "ModuleBlock";
  })[0];
}
