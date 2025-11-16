function MyObject() {
  let emp = {
    name: "Rohit Sharma",
    age: 32,
    isIndian: true,
    skills: ["Cloud Computing", "Full Stack Python", "ML",{a:1,b:2}],
    experience: function(){
        return '10 years'
    },
    certification:{
        certification1: 'AWS Proff',
        certification2: 'Oracle DBA',
        certification3: 'IBM Cyber Security'
    }
  } //Generic way




  console.log(emp)
}

MyObject()