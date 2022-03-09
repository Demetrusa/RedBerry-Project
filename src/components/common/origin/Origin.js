import React, { useState } from "react";
import "./Origin.css"
import { useHistory } from 'react-router-dom';
import FirstArrow  from "../../../images/Previous.svg"
import SirstArrow  from "../../../images/Next.svg"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


function Origin () {
    const [value, setValue] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    console.log(value);

    const history = useHistory();

    const handleClick = () => {
        history.push("/page")
    }
    const backClick = ()=> {
        history.push("/")
    }
    const originPage = () => {
        history.push("/origin")
    }
    const skillPage = () => {
        history.push("/page")
    }
    const covidPage = () => {
        history.push("/covid")
    }
    const aboutPage = () =>{
        history.push("about")
    }
    const submitPg =() => {
        history.push("submit")
    }
     const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
          .min(2, 'Too Short!')
          .max(30, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(30, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        tel: Yup.string()
            .required('+995')
      });
      console.log(SignupSchema, "scema")


      //ინტერნად უნდა ამიყვანოთ თუ ტექ-ლიდად? ;დ


      const appData = {
        first_name: firstName,
        last_name: lastName,
        email: mail,
        token: "89nOpas|asdanjjh^&as"
      }
      const onClick = () => {
        fetch('https://bootcamp-2022.devtest.ge/api/application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(appData)
        })
        .then( (response) => console.log(response))
        .then(function(data){
              console.log(data)
            }).catch((error) => {
                console.log(error)
            });
      }
    
    return(
        <div className="OriginPage">
            <div className="leftSide">
                <div className="OriginHeading">
                    <h2>Hey, Rocketeer, what are your coordinates?</h2>
                </div>
                <div className="firstForm">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        tel: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={values => {
                        console.log(values);
                    }}
                    >
                    {({ errors, touched }) => (
                        <Form>
                        <Field name="firstName"  placeholder="First Name" value={firstName} onChange={(e) => {
                            setFirstName(e.target.value)
                        }} />
                        {errors.firstName && touched.firstName ? (
                            <div style={{color: 'red'}}>{errors.firstName}</div>
                        ) : null}<br />
                        <Field name="lastName"  placeholder="Last Name" value={lastName} onChange={(e) => {
                            setLastName(e.target.value)
                        }}/>
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}<br />
                        
                        <Field name="email" type="email" value={mail}  placeholder="E mail" onChange={(e) => {
                            setMail(e.target.value)
                        }}/><br />
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}

                        <Field name="tel" type="tel" value={`+995 ${value}`} onChange={(e)=>{ 
                        setValue(e.target.value.slice(5,e.target.value.length))
                        }} /><br />

                        {errors.tel && touched.tel ? (
                            <div>{errors.tel}</div>
                        ) : null}<br />
                        <button type="submit" onClick={onClick}>Submit</button>
                        </Form>
                    )}
                 </Formik>
                </div>
                <div className="paginattion">
                    <img src={FirstArrow} alt="firstArrow"  onClick={backClick}/>
                    <div className="eclipse" id="first1" onClick={originPage}></div>
                    <div className="eclipse" onClick={skillPage}></div>
                    <div className="eclipse" onClick={covidPage}></div>
                    <div className="eclipse" onClick={aboutPage}></div>
                    <div className="eclipse" onClick={submitPg}></div>
                    <img src={SirstArrow} alt="SecondArrow"  id="SecondArrow" onClick={handleClick}/>
                </div>
            </div>
            <div className="rightSide">
                <div className="originHeadingTwo">
                    <h2>Redberry Origins</h2>
                </div>
                <div className="rightSideText">
                    <p>You watch “What? Where? When?” Yeah. Our founders used to play it.
                        That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
                        Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry.
                        And at that moment, a name for a yet to be born company was inspired - Redberry 😇
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Origin;