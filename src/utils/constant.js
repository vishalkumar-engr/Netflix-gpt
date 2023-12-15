export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6442-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUSY5FTFUmyogEtlhequx-okxmUS7dtoxS_QnSEsgGeFaS9OGcXtTSmvwVhZWHD_4P0VMaWNc-mPwS2tWLQOTobOr8lwDKA.png?r=4e5";

export const BG_IMAGE_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export const GET_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
