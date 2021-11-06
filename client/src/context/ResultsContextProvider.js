import { createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext = createContext();
const baseUrl = "https://api.github.com";
const postUrl = "http://localhost:8080";
const cookieUrl = "http://localhost:8080/api/me";

export const ContextProvider = ({ children }) => {
  // Result state is data from users info after the searchTerm has been rendered
  const [results, setResults] = useState([]);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);

  //Function for fetching user via searchTerm
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

  //Function for posting data to server
  const postResults = async (postData) => {
    try {
      await axios.post(`${postUrl}/postdata`, postData);
    } catch (error) {
      console.log(error);
    }
  };

  // Check if cookie exists on browser
  const checkCookie = async () => {
    const usr = await axios
      .get(cookieUrl, {
        withCredentials: true,
      })
      .then((res) => res.data);

    setUser(usr);
  };

  const logout = async () => {
    await axios.get("http://localhost:8080/api/logout", {
      withCredentials: true,
    });
    setUser(null);
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
        user,
        setUser,
        checkCookie,
        logout,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
