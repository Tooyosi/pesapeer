export const onChange = (e, changeState) => {
  const input = e.target;
  const form = input.form;
  const value = input.type === 'checkbox' ? input.checked : input.value;

  changeState((prev) => ({
    ...prev,
    [form.name]: {
      ...prev[form.name],
      [input.name]: value,
    }
  }));
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: '2'
})