import { useState } from "react";

const ExamSchedule = () => {
    const [selectedClass, setSelectedClass] = useState<string>("Class 5");

    const examSchedules: { [key: string]: { subject: string, date: string, time: string }[] } = {
        "Class 5": [
            { subject: "Math", date: "2024-07-10", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-11", time: "11:00 AM" },
        ],
        "Class 6": [
            { subject: "Math", date: "2024-07-12", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-13", time: "11:00 AM" },
        ],
        "Class 7": [
            { subject: "Math", date: "2024-07-14", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-15", time: "11:00 AM" },
        ],
        "Class 8": [
            { subject: "Math", date: "2024-07-16", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-17", time: "11:00 AM" },
        ],
        "Class 9": [
            { subject: "Math", date: "2024-07-18", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-19", time: "11:00 AM" },
        ],
        "Class 10": [
            { subject: "Math", date: "2024-07-20", time: "10:00 AM" },
            { subject: "Science", date: "2024-07-21", time: "11:00 AM" },
        ],
    };

    const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClass(event.target.value);
    };

    return (
        <>
            <h1>Exam Schedule</h1>
            <select value={selectedClass} onChange={handleClassChange}>
                <option value="Class 5">Class 5</option>
                <option value="Class 6">Class 6</option>
                <option value="Class 7">Class 7</option>
                <option value="Class 8">Class 8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
            </select>

            <table className="table-auto mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Subject</th>
                        <th className="px-4 py-2">Date</th>
                        <th className="px-4 py-2">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {examSchedules[selectedClass].map((exam, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{exam.subject}</td>
                            <td className="border px-4 py-2">{exam.date}</td>
                            <td className="border px-4 py-2">{exam.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ExamSchedule;
