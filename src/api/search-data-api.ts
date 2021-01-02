import { appConfig } from "../config";
import axios from "axios";

export async function searchData(searchDataObj: any) {
  const url = `${appConfig.apiHost}/api/search`;
  const { searchValue, searchType } = searchDataObj;

  const { data } = await axios.post(url, {
    search_text: searchValue,
    search_type: searchType,
  });
  return data;
}
