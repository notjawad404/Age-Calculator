import { useState, useEffect } from "react";

interface age {
    years: number,
    months: number,
    days: number
}


const AgeCalculator : React.FC = () => {
    const [date, setDate] = useState(new Date());
    const [age, setAge] = useState<age | null>(null);

    useEffect(() => setAge(GetAge(date)), [date]);

    function GetAge(birthDate: Date) : age | null {
        const today = new Date();
        const getDays  = (today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24);
        const years = Math.floor(getDays / 365);
        const months = Math.floor((getDays % 365) / 30);
        const days = Math.floor(getDays % 365) % 30;
        
        if (years < 0 || months < 0 || days < 0) {
            return null;
        }
        return { years, months, days };
    }


    return (
        <div className="bg-gray-700 h-screen flex justify-center items-center">
            <div className="bg-white pt-20 px-10 rounded-lg flex flex-col shadow-lg">
            <div>
                <form className="flex flex-col" onSubmit={(e)=> e.preventDefault()}>
                    <label className="text-gray-600 text-3xl mb-2">Date of Birth</label>
                    <input placeholder="Enter your Age" type="date"  className="border-2 border-gray-300 p-2 rounded-lg text-3xl" onChange={e => setDate(new Date(e.target.value))}/>
                </form>
            </div>
            <div className="mt-10 bg-red-500 py-10 px-5 rounded-3xl font-bold text-white text-3xl">
            {age !== null ? `Age = ${age.years} years, ${age.months} months, ${age.days} days` : "Please select a valid date"}
            </div>
            <div className="flex justify-center items-center mt-20 flex-col">
                <h1>Developed by @Jawad Ali</h1>
                    <a href="https://github.com/notjawad404/Age-Calculator.git" className="text-blue-500 text-3xl font-bold">GitHub Link</a>
            </div>
            </div>
        </div>
    )
}

export default AgeCalculator;


