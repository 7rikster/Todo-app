import React, { useEffect, useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getFormattedDate = () => {
    const daysOfWeek = [
      "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
    ];
    const monthsOfYear = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayNumber = date.getDate();
    const year = date.getFullYear();

    return {day,month,dayNumber,year};
  };

  const {day, month, dayNumber, year} = getFormattedDate();

  return (
    <div style={styles.calendarContainer}>
      <div style={styles.calendar}>
        <div style={styles.header}>
          <span style={styles.monthYear}>{day}</span>
        </div>
        <div style={styles.body}>
          <div style={styles.day}>{date.getDate()}</div>
          <div style={styles.weekday}>{month}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  calendar: {
    backgroundColor: "#ffffff",
    width: "100px",
    borderRadius: "12px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    fontFamily: "poppins",
    textAlign: "center",
  },
  header: {
    backgroundColor: "rgb(67, 67, 67)", 
    color: "#ffffff",
    padding: "1px 0",
    fontSize: "1.1rem",
    fontWeight: "800",
    letterSpacing: "1.6px",
  },
  monthYear: {
    textTransform: "uppercase",
  },
  body: {
    padding: "8px 0",
    position: "relative",
  },
  day: {
    fontSize: "4rem",
    fontWeight: "bold",
    color: "#333333",
    lineHeight: "0.9",
  },
  weekday: {
    fontSize: "0.8rem",
    color: "#4b0082", 
    marginTop: "4px",
    letterSpacing: "1px",
    fontWeight: "500",
  }
};

export default Calendar;
