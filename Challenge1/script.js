// If a user is in South Africa their shipping should be "R400".
// if a user is in Namibia their shipping should be "$600".
// for all other countries shipping is "$800".
// do not ship to "North Korea" and users from North Korea should receive a notice of such.
// if a user’s cost without shipping is equal to or more than R1000 or $60 in cost and they are based in South Africa or Namibia, then their shipping should be free.
// However, this is only the case if the number of customers is exactly 1, otherwise, it should show the message stored WARNING.

FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

let location;
let shipping; 
let currency;

if (location = "South Africa") { shipping === 400 && currency === 'R' }
if (location = "Namibia") { shipping === 600 && currency === '$' }
else { shipping === 800 && currency === '$' }

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

shipping = null
currency = $

if (((shoes + batteries + pens + shirts > 1000 && currency === "R") || (shoes + batteries + pens + shirts > 60 && currency === "$"))) {
	if (((location === "South Africa") || (location = "Namibia")) && customers < 2) {
    shipping = 0
	}
  else{
    console.warn(FREE_WARNING)
  }
}

if (shipping = 0 && customers !== 1) { 
  console.log(WARNING) 
}

location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

customers = '1'
location = 'RSA'
currency = null