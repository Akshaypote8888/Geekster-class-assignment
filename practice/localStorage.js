localStorage.setItem('firstname', 'Akshay')
localStorage.setItem('lastname', 'Pote')
localStorage.setItem('age', '22')
localStorage.setItem('country', 'India')
localStorage.setItem('city', 'wardha')

let skills  

let student = {
    'firstname': 'Akshay', 'lastname': 'Pote', 'age': '22', 'skills':['java','js','html','css'], 'country': 'India', 'city': 'wardha'
}

localStorage.setItem('student', JSON.stringify(student))

document.cookie = "name = akshay; expires=Sat, 10 Dec 2022 22:05:00 IST";
