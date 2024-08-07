// Replace these with your own Twitter API credentials
const apiKey = 'DqR5BKurvwBitPU2Of2slV2QM';
const apiSecretKey = 'Ua8O2qzWa89PqvGuCJMHj2VpMsertN8ate2hlKuFsBKFvVOIMY';
const accessToken = '1821119631295442945-7Ux1tV4jHNXmAvj3sBTVuvQY5L1C2s';
const accessTokenSecret = 'A39pFimUlXSbPBqJxOXEZ86ddKvL5ubF8veR3JosV3TBO';

// Replace with the ID of the tweet you want to track
const tweetId = '1821129857994207255';

// Function to fetch the retweet count
async function getRetweetCount() {
    const url = `https://api.twitter.com/2/tweets/${tweetId}?tweet.fields=public_metrics`;

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from Twitter API');
        }

        const data = await response.json();
        const retweetCount = data.data.public_metrics.retweet_count;

        document.getElementById('retweetCount').textContent = retweetCount;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('retweetCount').textContent = 'Error fetching data';
    }
}

// Call the function when the page loads
getRetweetCount();

// Update the count every 5 minutes (300000 milliseconds)
setInterval(getRetweetCount, 300000);