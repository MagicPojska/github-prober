import axios from "axios";
import querystring from "querystring";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const GITHUB_CLIENT_ID = "Iv1.290a2b0674206902";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET_CODE;
const secret = process.env.SECRET;
const COOKIE_NAME = "github-jwt";

const getGithubUser = async (code) => {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
};

export const getUser = async (req, res) => {
  const code = req.query.code;
  const path = req.query.path;

  if (!code) {
    throw new Error("No code!");
  }

  const githubUser = await getGithubUser(code);
  console.log(githubUser);

  const token = jwt.sign(githubUser, secret);

  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    domain: "localhost",
  });

  res.redirect(`http://localhost:3000${path}`);
};

export const getCookie = (req, res) => {
  const cookie = req.cookies[COOKIE_NAME];

  try {
    const decode = jwt.verify(cookie, secret);

    return res.send(decode);
  } catch (e) {
    return res.send(null);
  }
};
