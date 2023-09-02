import _ from 'lodash';

  const converToObject = content => {
    const current = content.split('\n').slice(1).filter((el) => el !== '').map((el) => el.split(';'));
    const object = current.map((el) => ({

      Company: el[0],
      Post: el[1],
      City: el[2],
      Experience: el[3],
      Employment: el[4],
      Salary: el[5],
      Education: el[6],
      Demand: el[7],

    }));
    return object;
  }

// Выведите количество записей с данными в переданном файле. 
// Учтите, что первая строчка в CSV файле является заголовочной, она не содержит данных и не должна учитываться.
const count = (object) => `Count: ${object.length}`;

// Выведите все города для каждой локации. Обратите внимание, что в этом задании надо вывести вообще все значения, даже если они дублируются.
const cityYes = (object) => {
const city = object.map (( {City} ) => City);
const cityInfo = city.join(', ');
return `Cities: ${cityInfo}`
}
// Выведите максимальную предложенную зарплату.
const salary = (object) => {
  return `Maximum salary: ${_.max(object.map(( {Salary} ) => Number(Salary.split(' ')[0])))}`
}
// Выведите количество вакансий, в которых обязательнвм требованием является высшее образование. 
// Обратите внимание, что есть варианты высшее техническое, высшее экономическое и тд. 
// Ориентироваться надо непосредственно на слово 'высшее'
const education = (object) => {
  return `Graduated: ${ object.filter(( {Education} ) => Education.includes('Высшее')).length}`;
}
// Выведите все встречающиеся варианты типов компаний. Обратите внимание, что здесь нужно вывести только уникальные значения без дублей.
const company = (object) => {
  return `Company types: ${_.uniq(object.map(( {Company} ) => Company.split(' ')[0])).join(', ')}`;
}
  
  
  export default  (content) => {
    
    const object = converToObject(content);
    console.log(count(object));
    console.log(cityYes(object));
    console.log(salary(object));
    console.log(education(object));
    console.log(company(object));
  }
 




