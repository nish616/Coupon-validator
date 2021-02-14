
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Routes

### CouponList

Click on Coupon List in the nav bar to see the list of available coupons.  
**Note : Coupon List also contains expired coupons added for testing.

### Validate Coupon

Submit the form with cart total value and coupon code to check coupon is applicable or not.
If coupon is expired or cart total does not satisfy coupon minimum amount coupon is not applicable. If it is applicable the discounted amount from the cart total is displayed.

### Create Coupon
 Submit the form to create new coupons.  
 **Important** cannot create multiple coupons with the same name.

### API is deployed in heroku.
baseURL : https://sleepy-hamlet-70742.herokuapp.com

**ADD baseURL in axios.js**
