
let reviewSchema = mongoose.Schema({

  product_id: Number,
	ReviewId: Number,
	Rating: Number,
	Summary: String,
	Recommend: Boolean,
	Response: String,
	Body: String,
	Date: String,
	ReviewerName: String,
	Email: String,
	Photos: [
    {
      id: Number,
      url: String
    }
  ],
	Helpfulness: Number,
	Report: Boolean,

});

let reviewMetaSchema = mongoose.Schema({

  product_id: Number,
  Ratings: {
    '1': Number,
    '2': Number,
    '3': Number,
    '4': Number,
    '5': Number
  },
  Recommend: {
    'false': Number,
    'true': Number
  },
  Characteristics: {
   characteristics: {
     id: Number,
     value: String
    },
  },
});
