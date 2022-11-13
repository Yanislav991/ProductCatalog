import React from 'react';
import RegisterForm from '../RegisterForm';
import LoginForm from '../LoginForm'
import style from './Home.module.css'

const Home = (props) => {
    const [formToggle, toggle] = React.useState(true);
    const handleSwitchChange = () => {
        toggle(!formToggle);
    }

    return (
        <div className={style.homePage}>
            <section id='formSection' className={style.formSection}>
                <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200  dark:bg-teal-500 dark:border-teal-400">
                    <label htmlFor="checked-toggle" className="inline-flex relative items-right cursor-pointer text-white font-bold gap-3">
                        <input type="checkbox" value="" onChange={handleSwitchChange} id="checked-toggle" className="sr-only peer mr-8" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-teal-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-teal-300"></div>
                        {formToggle ? "Register" : "Login"}
                    </label>
                    {formToggle ? <RegisterForm /> : <LoginForm />}
                </div>
            </section>
            <section className={style.homeDesc} >
                <h1 className={style.headerStyle}>
                    Product Catalog
                </h1>
                <p className={style.textStyle}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate, ducimus consequatur ipsum amet quaerat ea et saepe neque voluptatibus modi porro facilis pariatur vero corporis impedit dolor? Odio, alias?
                </p>
            </section>
        </div>
    );
};


export default Home;