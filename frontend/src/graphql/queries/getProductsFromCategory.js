import { fetchAxios } from "../../lib/axios";

export async function getProductsFromCategory(cid) {
  const data = await fetchAxios(
     { id:3 , slug:cid}
  );

  //return data?.productCategory;
  return data.filter(function (item) {
    return item.block_name == "ModuleBlock";
  })[0];
  
}
