
function scheduleMeeting() {
  // Get user input values
  const name = document.getElementById('name').value;
  const linkedin = document.getElementById('linkedin').value;
  const meetingLink = document.getElementById('meeting-link').value;
  const meetingTime = document.getElementById('meeting-time').value;

  // Create a new meeting item
  const meetingItem = document.createElement('div');
  meetingItem.classList.add('meeting-item');
  meetingItem.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    <p><strong>Meeting Link:</strong> <a href="${meetingLink}" target="_blank">${meetingLink}</a></p>
    <p><strong>Meeting Time:</strong> ${meetingTime}</p>
  `;

  // Append meeting item to the meeting list
  const meetingList = document.getElementById('meeting-list');
  meetingList.appendChild(meetingItem);

  // Clear input fields after scheduling meeting
  document.getElementById('name').value = '';
  document.getElementById('linkedin').value = '';
  document.getElementById('meeting-link').value = '';
  document.getElementById('meeting-time').value = '';
}
