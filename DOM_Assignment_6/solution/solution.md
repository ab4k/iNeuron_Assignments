## Task One

### Replace the equalizer logo with iNeuron logo

```javascript
const logo = document.querySelector(".logo");
logo.src = "../originalFiles/assets/ineuron-logo.png";
logo.style.width = "500px";
document.querySelector("main").style.padding = "100px";
```

## Task Two

### Change the price from $4/month to $10/month

```Javascript

const appPrice = document.querySelector(".app_price span");
appPrice.textContent = "$10";


```
