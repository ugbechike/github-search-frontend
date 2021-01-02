import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchType,
  setSearchQuery,
  fetchSearchData,
} from "../redux-store/search-slice";
import { RootState } from "../redux-store/root-reducer";
import debounce from "lodash/debounce";
import { Box } from "../component/base/box";
import { Text } from "../component/base/text";
import { Heading } from "../component/base/heading";
import { useFocus } from "../hooks/use-focus-hooks";
import { SearchInput } from "../component/input/search-input";
import { BaseSelect } from "../component/drop-down/base-select";
import { AiFillGithub } from "react-icons/ai";
import { UserCard } from "../component/card/user-card";
import { UserCardLoader } from "../component/card/user-card-loader";
import {RepoCard} from "../component/card/repo-card";

export enum SearchTypeEnum {
  "Users" = "users",
  "Repos" = "repos",
}

const options = [
  {
    key: 1,
    title: "users",
  },
  {
    key: 2,
    title: "repos",
  },
];

// todo clean up

export const Search = () => {
  const dispatch = useDispatch();

  const { searchQuery: searchValue, searchResult, searchType } = useSelector(
    (state: RootState) => state.search
  ) || {};

  const { isFocused, handleBlur, handleFocus } = useFocus();

  const loading = useSelector((state: RootState) => state.search.loading);

  const [debounceSearchValue, setDebounceSearchValue] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDebounceSync = debounce((value: string) => {
    if (value.length > 2) {
      setDebounceSearchValue(value);
    }
  }, 220);

  useEffect(() => {
    if (mounted) {
      handleDebounceSync(searchValue);
    }
  }, [searchValue]);



  useEffect(() => {
    if (mounted) {
      dispatch(fetchSearchData(debounceSearchValue));
    }
  }, [debounceSearchValue]);

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
    dispatch(setSearchType(event.currentTarget.value));
    if (searchValue.length > 2) {
      dispatch(fetchSearchData(debounceSearchValue));
    }
  };

  const isInputFocused =
    isFocused ||
    (Object.keys(searchResult).length > 0 && searchValue.length >= 3);

  return (
    <Box className={"app-container"}>
      <Box className={isInputFocused ? "default-search" : "search-on-top"}>
        <Box className={"header-wrapper"}>
          <AiFillGithub size={42} />
          <Box className={"header-content"}>
            <Heading className={"app-title"}>GitHub Searcher</Heading>
            <Text className={"app-subtitle"}>
              Search users or repositories below
            </Text>
          </Box>
        </Box>

        <Box className={"input-wrapper"}>
          <SearchInput
            placeholder={"search github..."}
            type="text"
            value={searchValue}
            autoComplete={"off"}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          />

          <BaseSelect
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={(event: FormEvent<HTMLSelectElement>) =>
              handleSelect(event)
            }
            options={options}
          />
        </Box>
      </Box>

      {loading && <UserCardLoader />}

      {!loading &&
        searchType === SearchTypeEnum.Users &&
        searchValue.length > 2 && <UserCard />}

        {!loading &&
        searchType === SearchTypeEnum.Repos &&
        searchValue.length > 2 && <RepoCard />}
    </Box>
  );
};
