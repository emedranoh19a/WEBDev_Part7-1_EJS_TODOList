db.Products.insert({
  _id: 3,
  name:"Rubber",
  price :"1.30",
  stock: 43,
  reviews:[{
    authorName: "Eric",
    rating: 5,
    review: "This is awesome!"
  }]
})

db.Products.updateOne({_id:1},{$set:{
  reviews:[{
    authorName: "Eric",
    rating: 5,
    review: "This is awesome!"
  }]
}})


reviews:[{
  authorName: "Eric",
  rating: 5,
  review: "This is awesome!"
}]
