import React from 'react'
import QustionCard from './QustionCard'
import "../../css/home-css/FrequentlyAskqn.css"
const questions = [
    {
        title: "What are the services provided to customers?",
        description: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },
    {
        title: "How can I submit a proposal for cooperation?",
        description: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },
    {
        title: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
        description: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },
    {
        title: "How do I get the payment complete?",
        description: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },
    {
        title: "How long can the collaboration last?",
        description: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
    },

]


const FrequentlyAskqn = () => {
    return (

        <div className='qn-container'>
            <h4 className='section-title'>Frequently Ask Question</h4>
            <h3 className='sub-title'>Some of our frequently asked questions</h3>

            <div>
                {
                    questions.map((item, index) => {
                        return <QustionCard key={index} title={item.title} description={item.description} />
                    })
                }

            </div>

        </div>
    )
}

export default FrequentlyAskqn