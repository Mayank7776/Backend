import express from 'express';
const app = express();

app.get('/',(req,res) => {
res.send('server ready to use');
})

app.get('/api/Product', (req,res) => {
  const Product = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      image: 'https://via.placeholder.com/150'
    },
  ]
  res.send(Product);
})

  const port = process.env.PORT || 5000;

  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  }
)