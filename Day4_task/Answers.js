//MAP REDUCE FILTER --->Day4

//Question 1---->Filter only prime numbers from thr given list
function primefilter(x)
{
    flag=0
    m=x/2; 
    if(Math.sign(x)!=-1)  //using sign to check the positive numbers
    {
    if(x == 0 || x == 1) 
    {
        flag=1;
    }
  for(i = 2; i <= m; i++)  
  {  
      if(x % i == 0)  
      {
          flag=1;  
          break;  
      }  
  }
  if(flag==0)
  return x; 
}
}
arr1=[2,3,9,11,21,17,1,2,0,-11]
result_array1=arr1.filter(primefilter)
console.log("The prime numbers are :",result_array1)
console.log("--------------------------------------------------------------------")


//Question 2--->convert string list to upper case

function mapUpper(x)
{
    return x.toUpperCase()
}

arr2=["Saab", "vOlVo", "BMW","tony","seema","jk"]
result_array2=arr2.map(mapUpper)
console.log("String converted into Upper Case :",result_array2)
console.log("--------------------------------------------------------------------")

//Question 3---->Sum of string length

function M_strLength(x)
{
    return x.length
}
function R_strLength(x,y)
{
    return x+y
}
arr=["pooja","brunoMars","sonu","Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr.","abcd"]
size_array=arr.map(M_strLength)
result_array7=size_array.reduce(R_strLength)
console.log("Total length of all the strings in the given list is :",result_array7)
console.log("--------------------------------------------------------------------")

//Question 4---->lengthest string

function R_strLength(x,y)
{
    return (x.length>y.length) ? x : y
}

arr=["pooja","brunoMars","sonu","Hubert Blaine Wolfeschlegelsteinhausenbergerdorff Sr."]
result_array6=arr.reduce(R_strLength)
console.log("The lengthest string found in the give list is :",result_array6)
console.log("--------------------------------------------------------------------")

//Question 5---->find the student with highest mark

function R_highscore(x,y)
{
    return (x.mark>y.mark) ? x : y
}

students = [
    { sno: 1, name: "Arjun", subjects: ['C++', 'Java', 'Javascript', 'angular', 'IOS', 'MongoDB'],mark:100},
    { sno: 2, name: "Jose", subjects: ['C++', 'Java', 'Javascript'],mark:69.5},
    { sno: 3, name: "Kiran", subjects: ['C++', 'C#', 'Javascript', 'CSS', 'SQL'],mark:70.1},
    { sno: 4, name: "Mohit", subjects: ['C++', 'Java', 'Javascript', 'Angular', 'React'],mark:90},
    { sno: 5, name: "Vinay", subjects: ['C++', 'Java', 'Javascript', 'Android', 'IOS', 'Angular'],mark:73.2},
    { sno: 6, name: "Santhosh", subjects: ['C++', 'Java', 'Javascript', 'angular', 'IOS', 'MongoDB'],mark:59},
]

result_array5=students.reduce(R_highscore)
console.log("The Student with highest score is :",result_array5)
console.log("--------------------------------------------------------------------")


//Question 6----convert all negative numbers in a list to postive numbers

function mapPositive(x)
{
    return Math.abs(x)
}

arr3=[-9,-1972,-0,-2341,1023,-72]
result_array3=arr3.map(mapPositive)
console.log("Negative numbers converted into positive :",result_array3)
console.log("--------------------------------------------------------------------")


//Question 7---->filter students with percentage above 70

function filterPercent(x)
{
    if(x.percentage>70)
    return x;
}

student = [
    { sno: 1, name: "Jose", subjects: ['C++', 'Java', 'Javascript'],percentage:69.5},
    { sno: 2, name: "Kiran", subjects: ['C++', 'C#', 'Javascript', 'CSS', 'SQL'],percentage:70.1},
    { sno: 3, name: "Mohit", subjects: ['C++', 'Java', 'Javascript', 'Angular', 'React'],percentage:90},
    { sno: 4, name: "Vinay", subjects: ['C++', 'Java', 'Javascript', 'Android', 'IOS', 'Angular'],percentage:73.2},
    { sno: 5, name: "Arjun", subjects: ['C++', 'Java', 'Javascript', 'angular', 'IOS', 'MongoDB'],percentage:59},
]
// console.log(student[1].percentage)
result_array4=student.filter(filterPercent)
console.log("Student details with 70% above :\n",result_array4)
console.log("--------------------------------------------------------------------")














