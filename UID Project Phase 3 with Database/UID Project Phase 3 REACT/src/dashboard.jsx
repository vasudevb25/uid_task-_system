import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(date.getMonth());

  useEffect(() => {
    renderCalendar();
  }, [currentYear, currentMonth]);

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) {
      liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday = i === date.getDate() && currentMonth === new Date().getMonth()
        && currentYear === new Date().getFullYear() ? "active" : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
      liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    document.querySelector(".days").innerHTML = liTag;
    document.querySelector(".current-date").innerText = `${months[currentMonth]} ${currentYear}`;
  };

  const handlePrevNext = (direction) => {
    if (direction === 'prev') {
      setCurrentMonth(prev => prev - 1);
      if (currentMonth === 0) {
        setCurrentYear(prev => prev - 1);
        setCurrentMonth(11);
      }
    } else {
      setCurrentMonth(prev => prev + 1);
      if (currentMonth === 11) {
        setCurrentYear(prev => prev + 1);
        setCurrentMonth(0);
      }
    }
  };

  return (
    <div>
        <style>
            {`/* dashboard.css */

            *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family:'Courier New', Courier, monospace;
            left: 2px;
            }
            body{
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(to right, #a1ffce, #faffd1);
            overflow: auto;
            }


            .right{
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            }
                                                /* TOP DASHBOARD */
            .right .top{
            position: relative;
            width: 100%;
            height: 70px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: azure;
            border-radius: 20px;

            }
                    /* SearchBox */
            .right .top .searchbox{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            }
            .right .top .searchbox h2{
            color: black;
            font-size: 1.4em;
            cursor: pointer;
            }
            .right .top .searchbox .inputbx{
            position: relative;
            width: 250px;
            height: 40px;
            background: rgb(204, 255, 204);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 10px;
            gap: 10px;
            overflow: hidden;
            }
            .right .top .searchbox .inputbx span{
            color: #8a9596;
            cursor: pointer;
            }
            .right .top .searchbox .inputbx input{
            position: relative;
            width: 100%;
            height: 20px;
            outline: none;  
            border: none;
            background: transparent;
            margin-right: 10px;
            font-size: 1em;
            color: black;
            }

                    /* User */
            .right .top .user{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            }
            .right .top .user span{
            color: black;
            cursor: pointer;
            font-size: 2em;
            }
            /*image*/
            .right .top .user .userimg{
            position: relative;
            width: 40px;
            height: 40px;
            overflow: hidden;
            cursor: pointer;
            }
            .right .top .user .userimg img{
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
            }
            /*VASV*/
            .right .top .user h2{
            font-size: 1.1em;
            line-height: 18px;
            white-space: nowrap;
            cursor: pointer;
            color: #242222;
            }
            /*ADMIN*/
            .right .top .user h2 span{
            color: #8a9596;
            font-size: .8em;
            }






                                                /* PROJECT TASKS */

            .project-tasks {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            width: 100%;
            grid-column-gap: 1.5rem;
            left: 30px;
            }

                    /* Heading */
            .project-column-heading {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            left: 20pxs;
            color: #232323;
            }
            .project-column-heading__title {
            font-size: 20px;
            color: #535454;
            }

                    /* Taskbox */
            .task {
            cursor: move;
            background: azure;
            padding: 15px;
            border-radius: 10px;
            width: 100%;
            box-shadow: black;
            margin-bottom: 10px;
            border: 3px;
            color: #464545;
            }
            .task:hover {
            box-shadow: rgba(107, 118, 136, 0.2) 0px 2px 8px 0px;
            }
            .task p {
            font-size: 15px;
            margin: 1.2em 0;
            }
            .task__tag {
            border-radius: 100px;
            padding: 2px 13px;
            font-size: 12px;
            }
            .task__tag--SET1 {
            color: black;
            background-color: rgb(211, 242, 211);
            }
            .task__tag--SET2 {
            color: black;
            background-color: rgb(255, 255, 185);
            }
            .task__tag--SET3 {
            color: black;
            background-color: rgb(158, 236, 219);
            }
            .task__tags {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            }
            .task__stats {
            position: relative;
            width: 100%;
            color: rgb(95, 95, 95);
            font-size: 12px;
            }







            #container-wrapper {
            text-align: right; /* Align container to the right */
            padding-right: 20px; /* Add some right padding */
            top: 100px;
            vertical-align: bottom;
            }

            .team{
            color: #676666;
            text-decoration: none;
            position:absolute;
            top: -20px;
            left: 30px;
            font-family: Arial, Helvetica, sans-serif;
            }

            .box-container {
            margin: 430px auto 10px;/*this can be changed for adjusyting the containers*/
            display: inline-block; /* Display as inline-block to make it align to the right */
            position: relative;
            }

            .box {
            width: 300px;
            height: 100px;
            border-radius: 10px;
            margin: 20px 20px 0 0;
            padding: 20px;
            box-shadow: 0px 0px 10px rgb(240, 240, 242);
            transition: transform 0.3s ease;/*used for smooth transition*/
            color: #fff;
            overflow: hidden;/*this is used for the text to be inside the box*/
            text-align: left;
            vertical-align:bottom; /* Align the boxes to the top */
            
            
            
            }

            .box:hover {
            transform: translateX(22px);
            /*this for the animation*/
            
            }

            .writings {
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight:500;
            
            color: rgb(7, 7, 7);
            }

            body {
            background-color: #a1ffce;
            color: red;
            text-align: right;
            }

            .button {
            position: relative;
            left: 900px;
            background-color: transparent;
            color: #242222;
            font-size: 12px;
            font-weight: 600;
            border-radius: 10px;
            width: 150px;
            height: 60px;
            border: none;
            text-transform: uppercase;
            cursor: pointer;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(51, 51, 51, 0.2);
            transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .button::before {
            content: "Click";
            font-family:Arial, Helvetica, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            pointer-events: none;
            background: linear-gradient(135deg,#58ffa9,#f1fd95);
            transform: translate(0%,90%);
            z-index: 99;
            position: relative;
            transform-origin: bottom;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .button::after {
            content: "Add Team";
            font-family:Arial, Helvetica, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #f0eaea;
            width: 100%;
            height: 180%;
            pointer-events: none;
            transform-origin: top;
            transform: translate(0%,-100%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            }

            .button:hover::before {
            transform: translate(0%,0%);
            }

            .button:hover::after {
            transform: translate(0%,-200%);
            }

            .button:focus {
            outline: none;
            }

            .button:active {
            scale: 0.95;
            }










                                                /* CALENDAR */

            /* Import Google font - Poppins */
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
            *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            }

            .wrapper {
            position: absolute;
            width: 90%; /* Use percentage for responsiveness */
            max-width: 300px; /* Set a maximum width */
            height: auto; /* Let the height adjust based on content */
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            top: 135px;
            left: 87%; /* Center horizontally */
            transform: translateX(-50%); /* Center horizontally */
            }

            /* Media queries for adjusting positioning on smaller screens */
            @media screen and (max-width: 768px) {
            .wrapper {
            top: 100px; /* Adjust top position for smaller screens */
            }
            }

            @media screen and (max-width: 576px) {
            .wrapper {
            top: 80px; /* Further adjust top position for even smaller screens */
            }
            }

            .wrapper header{
            display: flex;
            align-items: center;
            padding: 10px 20px 10px;
            justify-content: space-between;
            }
            header .icons{
            display: flex;
            }
            header .icons span{
            height: 38px;
            width: 38px;
            margin: 0 1px;
            cursor: pointer;
            color: #878787;
            text-align: center;
            line-height: 38px;
            font-size: 1.9rem;
            user-select: none;
            border-radius: 50%;
            }
            header .current-date{
            font-size: 1.45rem;
            font-weight: 400;
            }


            .calendar{
            padding: 1px;
            }
            .calendar ul{
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            text-align: center;
            }
            .calendar .days{
            margin-bottom: 10px;
            }
            .calendar li{
            color: #333;
            width: calc(100% / 7);
            font-size: 1.07rem;
            }
            .calendar .weeks li{
            font-weight: 300;
            cursor: default;
            }
            .calendar .days li{
            z-index: 1;
            cursor: pointer;
            position: relative;
            margin-top: 20px;
            padding: -80px;
            }
            .days li.inactive{
            color: #aaa;
            }
            .days li.active{
            color: #fff;
            }
            .days li::before{
            position: absolute;
            content: "";
            left: 50%;
            top: 50%;
            height: 30px;
            width: 30px;
            z-index: -1;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            }
            .days li.active::before{
            background: #9B59B6;
            }
            .days li:not(.active):hover::before{
            background: #f2f2f2;
            }





            footer{
            color: #242222;
            text-align: center;
            }
            `}
        </style>
    <div className="right">
      <div className="top">
        <div className="searchbox">
          <h2>Dashboard</h2>
          <div className="inputbx">
            <span className="material-symbols-outlined searchOpen">
              search
            </span>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="user">
          <span className="material-symbols-outlined">
            notifications
          </span>
          <div className="userimg">
            <img src="admin.jpg" alt="img" />
          </div>
          <h2 className="name">VASV<br /><span>Admin</span></h2>
          <span className="material-symbols-outlined">
            expand_more
          </span>
          <span className="material-symbols-outlined">
            menu
          </span>
        </div>
      </div>

      <div className='project-tasks'>
        {/* Taskset{IN PROGRESS} */}
        <div className='project-column'>
          <div className='project-column-heading'>
            <h2 className='project-column-heading__title'>In Progress</h2>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET1'>Website management</span></div>
            <p>Controlling the ad and ad revenue</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">12 Jan 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET2'>UI Design</span></div>
            <p>Front End Development for DBMS-US</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">13 Nov 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET3'>Testers</span></div>
            <p>Bug finding team</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">24 June 24</time></span>
            </div>
          </div>
          
        </div>

        {/* Taskset{COMPLETED} */}
        <div className='project-column'>
          <div className='project-column-heading'>
            <h2 className='project-column-heading__title'>Completed</h2>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET1'>Character Design</span></div>
            <p className="name">New character making for new game</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">Nov 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET2'>Marketing</span></div>
            <p>Revenue and Promotion</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">Nov 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET3'>Finance</span></div>
            <p>Profit and loss management</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">Nov 24</time></span>
            </div>
          </div>
        </div>

        {/* Taskset{MARKED FOR REVIEW} */}
        <div className='project-column'>
          <div className='project-column-heading'>
            <h2 className='project-column-heading__title'>Marked for Review</h2>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET1'>Planners</span></div>
            <p>Scheduling and planning</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">12 Feb 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET2'>Report</span></div>
            <p>Summary and Assessment</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">13 May 24</time></span>
            </div>
          </div>
          <div className='task' draggable='true'>
            <div className='task__tags'><span className='task__tag task__tag--SET3'>Hardware</span></div>
            <p>Hardware equipment maintenances</p>
            <div className='task__stats'>
              <span><time dateTime="2021-11-24T20:00:00">24 Dec 24</time></span>
            </div>
          </div>
        </div>

        {/* TEAM MEMBER BOX */}
        <div id="container-wrapper">
          <div className="box-container">
            <h2 className="team">Team and Members</h2>
            <div className="box" style={{ background: '#a1ffce' }}>
              <p className="writings">Task Name: Desiger</p>
              <p className="writings">Due Date: 12-3-24:12:4:24</p>
              <p className="writings">Active Members: Vicky Adi, Lol</p>
            </div>
            <div className="box" style={{ background: '#faffd1' }}>
              <p className="writings">Task Name: Planner</p>
              <p className="writings">Due Date: 12:3:24-13:4:24</p>
              <p className="writings">Active Members: idk, idk2, idk3</p>
            </div>
          </div>
        </div>
        <div id="container-wrapper">
          <div className="box-container">
            {/* boxes will be appended here */}
          </div>
        </div>
        <button onClick={createBox} className="button" type="button">
          <span className="button__icon"><svg className="svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
        </button>
      </div>

      {/* Calendar */}
      <div className="wrapper">
        <header>
          <p className="current-date"></p>
          <div className="icons">
            <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>chevron_left</span>
            <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>chevron_right</span>
          </div>
        </header>
        <div className="calendar">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days"></ul>
        </div>
      </div>

      <footer>
        <p>&copy; Task Management System 2024</p>
      </footer>
    </div>
    </div>
  );
};
const getRandomColor = () => {
    const colors = ['#a1ffce', '#a1ffce']; // Green shades
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const TeamBoxCreator = () => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [members, setMembers] = useState('');
    const [boxes, setBoxes] = useState([]);

    const handleCreateBox = () => {
        const membersArray = members.split(',').map(member => member.trim()).slice(0, 3);
        const limitedMembers = membersArray.join(', ');

        const randomColor = getRandomColor();
        const newBox = {
            taskName,
            dueDate,
            members: limitedMembers,
            color: randomColor
        };

        // Add the new box to the list of boxes
        setBoxes([...boxes, newBox]);

        // Clear input fields
        setTaskName('');
        setDueDate('');
        setMembers('');
    };

    return (
        <div>
            <div className="box-container">
                {boxes.map((box, index) => (
                    <div key={index} className="box" style={{ background: box.color }}>
                        <p className="writings">Task Name: {box.taskName}</p>
                        <p className="writings">Due Date: {box.dueDate}</p>
                        <p className="writings">Active Members: {box.members}</p>
                    </div>
                ))}
            </div>
            <div>
                <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name" />
                <input type="text" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="Due Date" />
                <input type="text" value={members} onChange={(e) => setMembers(e.target.value)} placeholder="Members (comma separated)" />
                <button onClick={handleCreateBox}>Add Team</button>
            </div>
        </div>
    );
};

export default Dashboard;
