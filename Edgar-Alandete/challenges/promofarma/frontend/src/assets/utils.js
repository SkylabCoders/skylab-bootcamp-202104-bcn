function buttonDisabler(cartProduct, button) {
  const buttonToDisable = { ...button };
  if (cartProduct && cartProduct?.quantity === cartProduct?.stock) {
    buttonToDisable.disabled = true;
  } else {
    buttonToDisable.disabled = false;
  }
}

export default buttonDisabler;
