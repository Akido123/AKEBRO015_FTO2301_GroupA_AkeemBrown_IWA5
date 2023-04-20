// If a user is in South Africa their shipping should be "R400".
// if a user is in Namibia their shipping should be "$600".
// for all other countries shipping is "$800".
// do not ship to "North Korea" and users from North Korea should receive a notice of such.
// if a user’s cost without shipping is equal to or more than R1000 or $60 in cost and they are based in South Africa or Namibia, then their shipping should be free.
// However, this is only the case if the number of customers is exactly 1, otherwise, it should show the message stored WARNING.

const local = 'RSA'
const customers = 1
let currency
let shipping

FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = 0

if (local === 'RSA') { 
  shipping = 400
  currency = 'R' 
}
else if(local === 'NAM') {
  shipping = 600 
  currency = '$'
} 
else {
  shipping = 800
  currency = '$'
}

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED 

if ((shoes + batteries + pens + shirts >= 1000 && currency === 'R') || (shoes + batteries + pens + shirts >= 60 && currency === '$')) {
  if (local === 'NAM' || local === 'RSA') {
    if (customers === 1){
      shipping = 0
    }
    else{ console.log(FREE_WARNING) }
	}
}

local === 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency, shoes + batteries + pens + toys + shirts + shipping)