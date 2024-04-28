import { setAuthToken, clearAuthToken, get, post } from "../../lib/luyapi.js";


export async function getAllCurrencies() {
    const token = 'bd9cf13092018ddea756b4180dda749ebe768816b8f368253bb2a8a15e034af7JilHZo3Cbko7JDgE1iIl5a_Sk9JufRIc';
    setAuthToken(token);
    try {
    const data = await get(`${baseUrl}/api-catalog-currency`, { });   
    return data;
} catch (error) {
    console.error('Error fetching users:', error);
    // Handle errors as needed
  }

}
