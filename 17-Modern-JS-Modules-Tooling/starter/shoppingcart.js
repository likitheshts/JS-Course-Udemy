console.log('exporting module');
const shippingcart=10;
const cart=[]

export const addtocart=function(productname,price)
{
  cart.push(productname,price);
  console.log(`itemo of ${productname} is pushed ${price} `);
}