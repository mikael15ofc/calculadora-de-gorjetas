
function calculateTip(event){
  event.preventDefault()
  let bill = document.getElementById('conta').value
  let serviçeQual = document.getElementById('forservice').value
  let people = document.getElementById('quntaspessoas').value
  if(bill == '' || serviçeQual == 0){
    alert('preencha os campos abaixos')
    return
  }
  if(people == "" || people <= 1){
    people = 1
    document.getElementById('each').style.display = 'none'
  }else{
    document.getElementById('each').style.display = 'block'
  }
  let total1 = (bill * serviçeQual) / people
  total1 = total1.toFixed(2)
  document.getElementById('tips').innerHTML = total1
  document.getElementById('result').style.display = "block"

}

document.getElementById('result').style.display = "none"
document.getElementById('each').style.display = "none"
document.getElementById('for').addEventListener('submit',calculateTip)