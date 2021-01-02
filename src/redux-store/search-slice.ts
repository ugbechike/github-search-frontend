import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Item } from "../utils/types";
import { searchData } from "../api/search-data-api";

interface InitialStateType {
  searchResult: Item;
  searchQuery: string;
  searchType: "users" | "repos";
  error: string;
  loading: boolean;
}

const initialState: InitialStateType = {
  searchResult: {},
  searchQuery: "",
  searchType: "users",
  error: "",
  loading: false,
};

// api thunk
export const fetchSearchData = createAsyncThunk(
  "search/fetchSearchData",
  async (searchValue: string, thunkAPI) => {
    const {
      search: { searchType, searchResult },
    } = thunkAPI.getState() as { search: InitialStateType };

    try {
      let response;
      // meaning data in store
      if (searchType === searchResult?.search_type) {
        const result = searchResult?.data?.items?.filter((value) =>
          value.login.includes(searchValue)
        );
        if (result?.length !== 0 && searchType === searchResult?.search_type) {
          return searchResult;
        }
      }
      response = await searchData({ searchValue, searchType });
      return response;
    } catch (err) {
      return err.toString();
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.loading = action.payload.length > 0;
      state.searchQuery = action.payload; // set the search query
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload; // set the current search type
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearchData.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchSearchData.fulfilled, (state, action) => {
      state.loading = false;
      state.searchResult = action.payload;
    });

    builder.addCase(fetchSearchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

// export the actions here
export const { setSearchQuery, setSearchType } = searchSlice.actions;

// we export the reducer
export const searchReducer = searchSlice.reducer;
