import React, { useState } from 'react';

const getRandomColor = () => {
    const colors = ['#a1ffce', '#a1ffce']; // Green shades
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const TeamBoxCreator = () => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [members, setMembers] = useState('');

    const handleCreateBox = () => {
        const membersArray = members.split(',').map(member => member.trim()).slice(0, 3);
        const limitedMembers = membersArray.join(', ');

        const randomColor = getRandomColor();
        const box = (
            <div className="box" style={{ background: randomColor }}>
                <p className="writings">Task Name: {taskName}</p>
                <p className="writings">Due Date: {dueDate}</p>
                <p className="writings">Active Members: {limitedMembers}</p>
            </div>
        );

        // Add the box to the container
        const container = document.querySelector('.box-container');
        container.appendChild(box);
    };

    return (
        <div>
            <button onClick={handleCreateBox}>Add Team</button>
        </div>
    );
};

export default TeamBoxCreator;
