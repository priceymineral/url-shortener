// import { Storage } from "./data/Storage.js";
// import { URL } from "../models/url_model.js";
// URL VALIDATION USING validator.js:
import validator from 'validator';
import { main } from '../connection.js';

async function cutURL(req, res) {
  // console.log("Validator test:", validator.isURL(req.body.url));
  // console.log("Request URL:", req.body.url);
  if (validator.isURL(req.body.url)) {
    const code =  "xxxxx".replace(
      /x/g, () => Math.floor(Math.random() * 16).toString(16)
    );
    // call to save the url and code to DB
    await main(code, req, res);

  } else {
    return res.status(400).send("Bad request, your URL is invalid");
  };
};

export { cutURL }

// // URL VALIDATION USING validator.js:
// import validator from 'validator';

// export const cutURL = (req, res) => {
//   console.log("validator test:", validator.isURL(req.body.url));
//   console.log("request URL:", req.body.url);
//   if (validator.isURL(req.body.url)) {
//     const code =  "xxxxx".replace(/x/g, () =>
//       Math.floor(Math.random() * 16).toString(16)
//     );
//     Storage.data.links[code] = req.body.url; // add key value to links
//     Storage.write(); // writes to storage.json
//     res.status(200).send({
//       code: code
//     });
//     console.log("Success! Saved the URL.")
//   } else {
//     return res.status(400).send("Bad request, your URL is invalid");
//   };
// };



// // Validation using RegEx
// export const cutURL = (req, res) => {
//   const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;
//   console.log("validator test:", req.body.url === undefined || !urlRegex.test(req.body.url));
//   console.log("request URL:", req.body.url);

//   if (req.body.url === undefined || !urlRegex.test(req.body.url)) {
//     const code =  "xxxxx".replace(/x/g, () =>
//       Math.floor(Math.random() * 16).toString(16)
//     );

//     Storage.data.links[code] = req.body.url; // add key value to links
//     Storage.write(); // writes to storage.json
//     res.status(200).send({
//       code: code
//     });
//   } else {
//     return res.status(400).send("Bad request, your URL is invalid");
//   };
// };