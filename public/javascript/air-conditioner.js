// Define function for handler
async function scheduleHandler(event) {
    // Prevent default behavior
    event.preventDefault();

    // Define global variables
    const schedule_id = document.querySelector('#schedule_id').value.trim();
    const schedule_date = document.querySelector('#schedule_date').value.trim();
    const action = document.querySelector('#action').value.trim();
    const notes = document.querySelector('#notes').value.trim();
    const status = document.querySelector('#status').value.trim();

    // Logic
    if (schedule_date && action && status) {
        const response = await fetch(`/api/schedules/${schedule_id}`, {
        method: 'put',
        body: JSON.stringify({
            schedule_date,
            action,
            notes,
            status
        }),
        headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/air-conditioner');
        } else {
            alert(response.statusText);
        }
    }
}

// Add event listener
document.querySelector('#scheduleForm').addEventListener('submit', scheduleHandler);