// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //  connect to my DB
  

  console.log(req.method)

  if(req.method === "GET") {
    // query my DB
    // SELECT * FROM USERS;
    // users.findMany();
    // console.log(users)
    return res.status(200).json({ name: 'This is a get Method' })
  }

  if(req.method === "POST") {
    // Add to my DB
    return res.status(200).json({ name: 'This is a post Method' })
  }

  if(req.method === "PUT") {
    //  update my db
    return res.status(200).json({ name: 'This is a put Method' })
  }

  res.status(200).json({ name: 'This is some random method' })
}


