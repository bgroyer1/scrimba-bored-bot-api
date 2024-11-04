const activityDiv = document.querySelector('.activity') 
const generateActivityBtn = document.querySelector('.generate-activity-btn')

async function boredBotAPI() {
    // fetch('https://apis.scrimba.com/bored/api/activity')
    // .then(res => res.json())
    // .then(({activity, type, participants, price})=> 
    //     activity.innerHTML = `
    //     <h2 class="activity-header">${activity}</h2>
    //     <p class="activity-category">Category: ${type}</p>
    //     <p class="activity-participants">Number of People Required: ${participants}</p>
    //     <p class="activity-cost"> Cost: $${price}</p>
    //     `
    // )
    activityDiv.classList.remove('hide')
    try {
        const response = await fetch('https://apis.scrimba.com/bored/api/activity')
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const {activity, type, participants, price} = await response.json()
        activityDiv.innerHTML = `
        <h2 class="activity-header">${activity}</h2>
        <p class="activity-category">Category: ${type}</p>
        <p class="activity-participants">Participants: ${participants}</p>
        <p class="activity-cost">Cost: $${price}</p>
        `
    } catch(error) {
        console.error(error.message)
    }
}

generateActivityBtn.addEventListener('click', boredBotAPI)



