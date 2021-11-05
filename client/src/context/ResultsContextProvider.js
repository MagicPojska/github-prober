import { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://api.github.com";
const postUrl = "http://localhost:8080";

export const ContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (term) => {
    setIsLoading(true);

    try {
      setResults([]);
      const response = await axios.get(`${baseUrl}/users/${term}`, {
        headers: {
          Authorization: "Bearer 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",
        },
      });
      //Getting all the repos from the user
      const repo = await axios.get(`${response.data.repos_url}`, {
        headers: {
          Authorization: "Bearer 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",
        },
      });
      setResults(response.data);
      setRepos(repo.data);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const postResults = async (postData) => {
    try {
      await axios.post(`${postUrl}/postdata`, postData);
      console.log(postData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        getResults,
        postResults,
        results,
        repos,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
