//addition of two no arrow function

const AddNumbers = (props)=>

    {
     const sum = props.num1 + props.num2;
     return (<h2>The sum is: {sum}</h2>)


    };
export default function Arrowtwo()
{

    return(
    <div>
{/* //abe te na componenet ahe na react madhe smjl ka mg compoennet pass krtoy na react madhe mahun<> yat liych smjl ka</> */}

 <AddNumbers num1={5} num2={10} />
 <AddNumbers num1={8} num2={2} />
    </div>

        
    );
}





const sum =({num1,num2})=>{
    return(
     num1+num2
    );
}

export default function Pract1()
{


    return(
        <div>

        <h1>Hello</h1>
        {/* <sum num1={5} num2={10}></sum> */}
        <h2>Sum: {sum({ num1: 5, num2: 10 })}</h2>

        </div>
    );
}
// why we do props.num and props .num2
// ChatGPT said:
// Great question! Let’s break it down step by step in simple terms so you understand clearly.

// 🔹 Why Do We Use props.num1 and props.num2?
// When we write:

// jsx
// Copy code
// <AddNumbers num1={5} num2={10} />
// ✔ num1 and num2 are props (properties) passed to the AddNumbers component.

// Inside AddNumbers, we access these props using props.num1 and props.num2.

// 📌 Think of it like an object:

// js
// Copy code
// const props = { num1: 5, num2: 10 };
// console.log(props.num1); // Output: 5
// console.log(props.num2); // Output: 10
// ✔ props is an object, and num1 and num2 are its keys.
// ✔ We use props.num1 and props.num2 to get the values inside the component.





{/* <AddNumbers num1={5} num2={10} />
      <AddNumbers num1={8} num2={2} /> what is this we write inside <p> tag why we direct write in html tag 
ChatGPT said:
Good question! Let’s break it down step by step.

🔹 Why Do We Write <AddNumbers num1={5} num2={10} /> Directly Like an HTML Tag?
✅ In React, components behave like custom HTML tags.
✅ We pass values (props) inside them just like attributes in HTML.
✅ It makes React components reusable like real HTML elements.

Breaking it Down:
📌 Example of an HTML Element:

jsx
Copy code
<p>Hello, Vishal!</p>
✔ <p> is a built-in HTML tag.

📌 Example of a React Component:

jsx
Copy code
<AddNumbers num1={5} num2={10} />
✔ <AddNumbers> is a custom React component, just like <p>.
✔ num1={5} and num2={10} are props passed to the component.

🔹 What Happens Behind the Scenes?
When React renders this:

jsx
Copy code
<AddNumbers num1={5} num2={10} />
It is the same as calling a function like this:

js
Copy code
AddNumbers({ num1: 5, num2: 10 });
So, the component receives { num1: 5, num2: 10 } as an object.


 */}






