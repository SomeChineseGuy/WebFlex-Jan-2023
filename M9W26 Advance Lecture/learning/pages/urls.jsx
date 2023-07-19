export default function Urls ({data, moreData, templateVars}) {
  console.log(data);
  console.log(moreData);
  console.log(templateVars);
  return (
    <div>
      <h1>This is the URLS page</h1>
    </div>
  )
}

// app.get("/urls", (req, res) => {
//   if(!res.locals.user) {
//     return res.status(401).render("_401");
//   }
//   let templateVars = { urls: matchingCurrrentUser(urlDatabase, res.locals.user.id)};
//   res.render("urls_index", templateVars);
// });


// getStaticProps
// getServerSideProps

export function getServerSideProps() {
  console.log('fire!');
  // here is where we write the DB connection
  // SELECT * FROM URLS;
  // res.rows[0]

  let templateVars = { urls: {
    "1gsy2": {
      longURL: 'www.google.ca',
      shortURL: 'j1h21k3j',
      userId: '1j12jk3h'
    }
  }};

  return {
    props: {
      data: 'res.rows[0]',
      moreData: "More data!",
      templateVars
    }
  }
}

// export function getStaticProps() {
//   console.log('fire!');
//   return {
//     props: {
//       data: 'test'
//     }
//   }
// }

