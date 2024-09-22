function createDate(hour, day, month, yearArg) {
  try {
    // Validate month (1-12) and day (1-31)
    if (month < 0 || month > 12) throw new Error("Invalid month value: " + month);
    if (day < 0 || day > 31) throw new Error("Invalid day value: " + day);

    const year = yearArg ?? new Date().getFullYear(); // Use the provided year or current year

    // Create the date object (month is 0-indexed)
    const date = new Date(year, month, day);

    // Check if the date is valid
    // if (isNaN(date.getTime())) {
    //   throw new Error("Invalid date.");
    // }

    // Set the hours to the provided time (13:00 in this case)
    date.setHours(hour, 0, 0, 0); // Set time to hour:00:00:00

    return date;
  } catch (error) {
    console.log('Error:', error.message);  // Log the actual error message
    return null; // Return null on error
  }
}


